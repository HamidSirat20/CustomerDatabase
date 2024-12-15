using Domain.src.Common;
using Domain.src.Dtos;
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


app.MapGet("/customers", async (ICustomerRepo repo) =>
    {
        return await repo.GetAllCustomersAsync(new QueryParameters());
    }).Produces<CustomerDto[]>(StatusCodes.Status200OK);

app.MapGet("/customers/{Id:int}", async (int Id, ICustomerRepo repo) =>
      {
          var customer = await repo.GetCustomerByIdAsync(Id);
          if (customer == null)
          {
              return Results.Problem($"Customer with Id {Id} not found!", statusCode: 404);
          }
          return Results.Ok(customer);
      }).ProducesProblem(404).Produces<ReadCustomerDto>(StatusCodes.Status200OK);


app.Run();

