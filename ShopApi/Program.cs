using Microsoft.EntityFrameworkCore;
using ShopApi.Data;

var builder = WebApplication.CreateBuilder(args);

//  Register EF Core + SQL Server
builder.Services.AddDbContext<ShopContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
        policy =>
        {
            policy.WithOrigins("http://localhost:3000") // frontend URL
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});
var app = builder.Build();

// Enable Swagger only in development
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("AllowReactApp");
//  Enable routing and controllers
app.UseAuthorization();
app.MapControllers();
// app.UseCors(builder =>
//     builder.WithOrigins("http://localhost:3000")
//            .AllowAnyHeader()
//            .AllowAnyMethod());

app.Run();
