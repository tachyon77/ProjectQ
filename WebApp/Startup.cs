using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using ProjectQ.BusinessLogic;
using ProjectQ.BusinessLogic.Services;
using ProjectQ.DAL;
using Microsoft.AspNetCore.Antiforgery;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using ProjectQ.Model;
using Microsoft.EntityFrameworkCore;
using ProjectQ.WebApp.Services;
using ProjectQ.DAL.EntityFramework;

namespace ProjectQ.WebApp
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
                options.Password.RequireDigit = false ;
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

            services.AddMvc(options =>
            {
                options.Filters.Add(new AutoValidateAntiforgeryTokenAttribute());
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
            services.AddScoped<IUnitOfWork, UnitOfWork>();

            services.AddSingleton<IEmailSender, EmailSender>();
            services.AddSingleton<INotificationSender, NotificationSender>();
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
                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
                {
                    HotModuleReplacement = true
                });
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseWebSockets();

            app.UseStaticFiles();

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
