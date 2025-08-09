using Microsoft.AspNetCore.Components;
using System.Text.Json.Serialization;

namespace GoxBit.Components
{
    public partial class Model : ComponentBase
    {
        [Parameter]
        public string Name { get; set; }
        [Parameter]
        public string Url { get; set; }
        [Parameter]
        public List<ToolType> Tools { get; set; }
    }

    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum ToolType
    {
        Maya,
        Max,
        ZBrush,
        Unity,
        UnrelEngine,
        Blender,
        SubstancePainter
    }



}
