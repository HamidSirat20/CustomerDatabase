using Domain.src.Common;
using Domain.src.RepoInterfaces;
using Microsoft.EntityFrameworkCore;
using WebApi.src.DataContext;
using WebApi.src.Repos;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors();

// Register DbContext
builder.Services.AddDbContext<CustomerDbContext>(options =>
    options.UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking));
// Register services

builder.Services.AddScoped<ICustomerRepo, CustomerRepo>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors(p => p.WithOrigins("http://localhost:3000").AllowAnyHeader().AllowAnyMethod());

app.UseHttpsRedirection();


app.MapGet("/customers", (ICustomerRepo repo) =>
                        repo.GetAllCustomersAsync(new QueryParameters()));


app.Run();

