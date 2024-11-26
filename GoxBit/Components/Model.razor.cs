using Microsoft.AspNetCore.Components;

namespace GoxBit.Components
{
    public partial class Model : ComponentBase
    {
        [Parameter]
        public string Name { get; set; }
        [Parameter]
        public string Url { get; set; }
        [Parameter]
        public string Tool { get; set; }
    }
}
