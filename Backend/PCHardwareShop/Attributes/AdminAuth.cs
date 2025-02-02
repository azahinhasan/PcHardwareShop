﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Net;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;
using System.Net.Http;
using System.Text;
using System.Threading;
using System.Security.Principal;
using PCHardwareShop.Models;

namespace PCHardwareShop.Attributes
{
    public class AdminAuth : AuthorizationFilterAttribute
    {
        // go to postman in Headers to disable authorizaton option
        public override void OnAuthorization(HttpActionContext actionContext)
        {
            base.OnAuthorization(actionContext);

            if (actionContext.Request.Headers.Authorization == null)
            {
                actionContext.Response = actionContext.Request.CreateResponse(HttpStatusCode.Unauthorized);
           
            }
            else
            {
                string encoded = actionContext.Request.Headers.Authorization.Parameter;
                string decoded = Encoding.UTF8.GetString(Convert.FromBase64String(encoded));
                string[] splittedText = decoded.Split(new char[] { ':' });
                string email = splittedText[0];
                string token = splittedText[1];



                PcHardwareShopEntities4 context = new PcHardwareShopEntities4();
                var data = context.TokenTables.Where(x => x.Token == token && x.Email == email).FirstOrDefault();

                if (data != null)
                {

                    var  data2 = context.EmployeeInfoes.Where(x => x.Email == email && x.EmployeeRank.Rank == "admin" ).FirstOrDefault();


                    if (data2 != null)
                    {
                        Thread.CurrentPrincipal = new GenericPrincipal(new GenericIdentity("AdminValid"), null);
                    }
                    else
                    {
                        actionContext.Response = actionContext.Request.CreateResponse(HttpStatusCode.Unauthorized);
                    }
                        
                   
                }
                else
                {
                     actionContext.Response = actionContext.Request.CreateResponse(HttpStatusCode.Unauthorized);
                    

                }

            }
        }
    }
}