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
            var jsonFile = File.ReadAllText("wwwroot/Gx.json");
            var Showcasess = JsonSerializer.Deserialize<Model>(jsonFile);

            for (var i = 0; i<5; i++)
           {
                    this.Showcase.Add(
                        new Model
                        {
                            Name = "Pato Cakes",
                            Url = "https://sketchfab.com/models/a6663915cfd94cabaf49db66c1a27685/embed?autostart=1",
                            Tool =  "3DS Max"
                        }
                     );
           }
        }
    }

    
}
