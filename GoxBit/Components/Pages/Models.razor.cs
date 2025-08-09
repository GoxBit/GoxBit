using Microsoft.AspNetCore.Components;
using System.Text.Json;
using System;
using System.Net.Http;

 namespace GoxBit.Components.Pages
{
    public partial class Models : ComponentBase
    {
        private List<Model> Showcase = new List<Model>();

        protected override async Task OnInitializedAsync()
        {
            var jsonFile = File.ReadAllText("wwwroot/Models.json");
            this.Showcase = JsonSerializer.Deserialize<List<Model>>(jsonFile);
        }
    }

    
}
