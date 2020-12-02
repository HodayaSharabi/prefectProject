﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Routing;

namespace ShipmentsCompany
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            GlobalConfiguration.Configure(WebApiConfig.Register);
        }
        protected void Application_BeginRequest()

        {
            Response.AddHeader("Access-Control-Allow-Origin", "*");
            Response.AddHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
            Response.AddHeader("Access-Control-Allow-Headers", "Content-Type, Accept, Pragma, Cache-Control, Authorization ");

            if (Request.Headers.AllKeys.Contains("Origin", StringComparer.CurrentCultureIgnoreCase)
                && Request.HttpMethod == "OPTIONS")
            {
                Response.End();
            }
        }
    }
}
