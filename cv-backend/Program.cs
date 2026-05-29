using Microsoft.EntityFrameworkCore;
using cv_backend.Contexts;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<CVContext>(
    options => options.UseSqlite("Data source = Databases/CVData.db")
);

builder.Services.AddControllers();
builder.Services.AddOpenApi();

var app = builder.Build();

// Gjør index filen accessable
DefaultFilesOptions options = new DefaultFilesOptions();
options.DefaultFileNames.Add("index.html");

app.UseDefaultFiles(options);

app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseAuthorization();

app.MapControllers();
app.MapFallbackToFile("index.html");

app.Run();
