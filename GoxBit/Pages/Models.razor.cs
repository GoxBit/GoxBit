using Microsoft.AspNetCore.Components;
using System.Text.Json;
using System;
using System.Net.Http;
using GoxBit.Components;

namespace GoxBit.Pages
{
    public partial class Models : ComponentBase
    {
        private List<Model> Showcase = new List<Model>();
        private bool showAllModels = false;
        private void ShowModels() => showAllModels = true;
        protected override async Task OnInitializedAsync()
        {
            var jsonFile = File.ReadAllText("wwwroot/Models.json");
            Showcase = JsonSerializer.Deserialize<List<Model>>(jsonFile);
        }
    }

    
}
