using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;
namespace ShipmentsCompany
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            //config.EnableCors(new EnableCorsAttribute("http://localhost/", headers: "*", methods: "*"));
            //config.EnableCors(new EnableCorsAttribute("http://localhost:4200", headers: "*", methods: "*"));
            //var cors = new EnableCorsAttribute("*", "*", "*");
            // Web API configuration and services
            //config.EnableCors(cors);
            // Web API routes
            config.MapHttpAttributeRoutes();
            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
