using Microsoft.AspNetCore.Components;
using System.Net.Http.Json;
using System.Text.Json.Serialization;
using GoxBit.Components;
using System.Globalization;

namespace GoxBit.Pages
{
    public partial class Models : ComponentBase
    {
        private const string SketchfabModelsUrl = "https://api.sketchfab.com/v3/models?user=goxbit&archives_flavours=false";

        [Inject]
        private HttpClient Http { get; set; } = default!;

        private List<Model> Showcase = new List<Model>();
        private int carouselSelectedIndex = 0;
        private int carouselRenderKey = 0;
        private bool showAllModels = false;
        private void ShowModels() => showAllModels = true;

        protected override async Task OnInitializedAsync()
        {
            var response = await Http.GetFromJsonAsync<SketchfabModelsResponse>(SketchfabModelsUrl);

            Showcase = response?.Results?
                .Where(model => !string.IsNullOrWhiteSpace(model.Name) && !string.IsNullOrWhiteSpace(model.EmbedUrl))
                .Select(model => new Model
                {
                    Name = model.Name!,
                    Url = model.EmbedUrl!,
                    Tools = model.Tags?
                        .Select(tag => TryMapTool(tag.Name))
                        .Where(tool => tool.HasValue)
                        .Select(tool => tool!.Value)
                        .Distinct()
                        .ToList() ?? new List<ToolType>()
                })
                .ToList() ?? new List<Model>();

            carouselSelectedIndex = 0;
            carouselRenderKey++;
        }

        private sealed class SketchfabModelsResponse
        {
            [JsonPropertyName("results")]
            public List<SketchfabModel>? Results { get; set; }
        }

        private sealed class SketchfabModel
        {
            [JsonPropertyName("name")]
            public string? Name { get; set; }

            [JsonPropertyName("embedUrl")]
            public string? EmbedUrl { get; set; }

            [JsonPropertyName("tags")]
            public List<SketchfabTag>? Tags { get; set; }
        }

        private sealed class SketchfabTag
        {
            [JsonPropertyName("name")]
            public string? Name { get; set; }
        }

        private static ToolType? TryMapTool(string? rawTag)
        {
            if (string.IsNullOrWhiteSpace(rawTag))
            {
                return null;
            }

            var normalized = NormalizeTag(rawTag);

            return normalized switch
            {
                "Max" => ToolType.Max,
                "Zbrush" => ToolType.ZBrush,
                "Substance Painter" => ToolType.SubstancePainter,
                _ => null
            };
        }

        private static string NormalizeTag(string tag)
        {
            var withSpaces = tag.Replace('-', ' ').Trim().ToLowerInvariant();
            return CultureInfo.InvariantCulture.TextInfo.ToTitleCase(withSpaces);
        }
    }
}
