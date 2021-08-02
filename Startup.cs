using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(FindYourFood.Startup))]
namespace FindYourFood
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
