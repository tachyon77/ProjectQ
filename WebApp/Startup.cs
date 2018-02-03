using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using ProjectQ.BusinessLogic;
using ProjectQ.DAL;
using ProjectQ.WebApp.Authentication;

namespace WebApp
{//
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().AddJsonOptions(options =>
            {
                options.SerializerSettings.ReferenceLoopHandling =
                                           Newtonsoft.Json.ReferenceLoopHandling.Ignore;
            });

            /*services.AddAuthorization(options =>
            {
                options.AddPolicy("ValidFacebookToken", policy =>
                    policy.Requirements.Add(new ValidFacebookAccessTokenRequirement()));
            });

            services.AddSingleton<IAuthorizationHandler, ValidFacebookTokenHandler>();
            */

            services.AddAuthentication(options =>
            {
                // the scheme name has to match the value we're going to use in AuthenticationBuilder.AddScheme(...)
                options.DefaultAuthenticateScheme = "Facebook Auth";
                options.DefaultChallengeScheme = "Facebook Auth";
            })
            .AddCustomAuth(options =>
            {
                options.Authenticator = new FacebookGraphApiClient();
            });


            services.AddScoped<IUserManager, UserManager>();
            services.AddScoped<IQuestionManager, QuestionManager>();
            services.AddScoped<IAnswerManager, AnswerManager>();
            services.AddScoped<IUnitOfWork, ProjectQ.DAL.EntityFramework.UnitOfWork>();
            services.AddScoped<
                ProjectQ.DAL.EntityFramework.ProjectQEntities,
                ProjectQ.DAL.EntityFramework.SqlServer.DbContext>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
                {
                    HotModuleReplacement = true
                });
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseStaticFiles();

            app.UseAuthentication();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");

                routes.MapSpaFallbackRoute(
                    name: "spa-fallback",
                    defaults: new { controller = "Home", action = "Index" });
            });
        }
    }
}
