using MudBlazor;
using GoxBit.Components;

namespace GoxBit.Helpers
{
    public static class ToolTypeExtensions
    {
        public static string ToBadgeColor(this ToolType toolType) =>
        
            toolType switch
            {
                ToolType.Maya => Colors.Cyan.Darken1,
                ToolType.Max => Colors.Cyan.Lighten1,
                ToolType.ZBrush => Colors.Orange.Darken3,
                ToolType.Unity => Colors.Gray.Lighten1,
                ToolType.UnrelEngine => Colors.Gray.Darken4,
                ToolType.Blender => Colors.Amber.Darken3,
                ToolType.SubstancePainter => Colors.Red.Darken3,
                _ => Colors.Gray.Lighten1
            };
        
    }
}
