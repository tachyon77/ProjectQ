using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

using System;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.AspNetCore.Antiforgery;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.Authorization;


using ProjectQ.BusinessLogic;
using ProjectQ.BusinessLogic.Services;
using ProjectQ.DAL;
using ProjectQ.Model;
using Microsoft.EntityFrameworkCore;
using ProjectQ.DAL.EntityFramework;
using ProjectQ.DAL.Graph;


namespace ProjectQ.FrontEnd
{
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
            services
                .AddMvc(config =>
                {
                    var policy = new AuthorizationPolicyBuilder()
                                     .RequireAuthenticatedUser()
                                     .Build();
                    config.Filters.Add(new AutoValidateAntiforgeryTokenAttribute());
                    config.Filters.Add(new AuthorizeFilter(policy));
                })
                .SetCompatibilityVersion(CompatibilityVersion.Version_2_1)
                .AddJsonOptions(options =>
                {
                    options.SerializerSettings.ReferenceLoopHandling =
                                               Newtonsoft.Json.ReferenceLoopHandling.Ignore;
                });

            services.AddAntiforgery(options => options.HeaderName = "X-XSRF-TOKEN");
            services.AddDbContext<ApplicationDbContext>(
                options =>
                options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

            services.AddDbContext<ProjectQEntities>(
                options =>
                options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

            services.AddIdentity<ApplicationUser, IdentityRole>(
                    config => { config.SignIn.RequireConfirmedEmail = true; }
                )
                .AddEntityFrameworkStores<ApplicationDbContext>()
                .AddDefaultTokenProviders();

            services.Configure<IdentityOptions>(options =>
            {
                // Password settings
                options.Password.RequireDigit = false;
                options.Password.RequiredLength = 1;
                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequireUppercase = false;
                options.Password.RequireLowercase = false;
                options.Password.RequiredUniqueChars = 1;

                // Lockout settings
                options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(30);
                options.Lockout.MaxFailedAccessAttempts = 1000;
                options.Lockout.AllowedForNewUsers = true;

                // User settings
                options.User.RequireUniqueEmail = true;
            });

            services.ConfigureApplicationCookie(options =>
            {
                // Cookie settings
                options.Cookie.HttpOnly = true;
                options.Cookie.Expiration = TimeSpan.FromDays(150);
                options.LoginPath = ""; // If the LoginPath is not set here, ASP.NET Core will default to /Account/Login
                options.LogoutPath = ""; // If the LogoutPath is not set here, ASP.NET Core will default to /Account/Logout
                options.AccessDeniedPath = ""; // If the AccessDeniedPath is not set here, ASP.NET Core will default to /Account/AccessDenied
                options.SlidingExpiration = true;
            });

            // In production, the Angular files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/dist";
            });

            services.AddSingleton(Configuration);

            services.AddScoped<IInvitationRequestManager, InvitationRequestManager>();
            services.AddScoped<IQuestionManager, QuestionManager>();
            services.AddScoped<IQuestionViewManager, QuestionViewManager>();
            services.AddScoped<IQuestionTopicManager, QuestionTopicManager>();
            services.AddScoped<IAnswerManager, AnswerManager>();
            services.AddScoped<IAnswerPaymentManager, AnswerPaymentManager>();
            services.AddScoped<IPurchaseAnswerManager, PurchaseAnswerManager>();
            services.AddScoped<ICreditCardCharger, StripeCharger>();
            services.AddScoped<IAnswerDraftManager, AnswerDraftManager>();
            services.AddScoped<IUserManager, UserManager>();
            services.AddScoped<ICredentialsManager, CredentialsManager>();
            services.AddScoped<INotificationManager, NotificationManager>();
            services.AddScoped<IAnswerRatingManager, AnswerRatingManager>();
            services.AddScoped<IQuestionFollowerManager, QuestionFollowerManager>();
            services.AddScoped<IBlobManager, BlobManager>();
            services.AddScoped<IUnitOfWork, UnitOfWork>();

            services.AddSingleton<IGraphQueries, CosmosGraph>();
            services.AddSingleton<IEmailSender, EmailSender>();
            services.AddSingleton<INotificationSender, NotificationSender>();
            services.AddSingleton<IBlobClientProvider, BlobClientProvider>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(
            IApplicationBuilder app, 
            IHostingEnvironment env,
            IAntiforgery antiforgery)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                app.UseHsts();
            }

            app.UseWebSockets();
            app.UseAuthentication();

            app.Use(async (context, next) =>
            {
                // XSRF-TOKEN used by angular in the http if provided
                var tokens = antiforgery.GetAndStoreTokens(context);
                context.Response.Cookies.Append("XSRF-TOKEN",
                    tokens.RequestToken, new CookieOptions
                    {
                        HttpOnly = false
                    }
                );
                await next();
            });

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller}/{action=Index}/{id?}");
            });

            app.UseSpa(spa =>
            {
                // To learn more about options for serving an Angular SPA from ASP.NET Core,
                // see https://go.microsoft.com/fwlink/?linkid=864501

                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseAngularCliServer(npmScript: "start");
                }
            });
        }
    }
}
