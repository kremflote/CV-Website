using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using cv_backend.Contexts;
using cv_backend.Models;

namespace cv_backend.Controllers;

[ApiController]
[Route("api/[controller]")]

public class ShowcaseController(CVContext _context, IWebHostEnvironment webHostEnvironment) : ControllerBase
{
    [HttpGet]
    public async Task<ActionResult<List<Showcase>>> Get()
    {
        try
        {
            List<Showcase> showcases = await _context.Showcases.ToListAsync();
            return Ok(showcases);
        }
        catch (Exception e)
        {
            return StatusCode(500, $"Error: {e.Message}");
        }
    }


    [HttpGet("{id}")]
    public async Task<ActionResult<Showcase>> Get(int id)
    {
        try
        {
            Showcase? showcase = await _context.Showcases.FindAsync(id);
            if (showcase == null)
            {
                return NotFound("No showcase found with that ID.");
            }
            return Ok(showcase);
        }
        catch (Exception e)
        {
            return StatusCode(500, $"Error: {e.Message}");
        }
    }

    [HttpGet("{id}/images")]
    public async Task<ActionResult<List<string>>> GetImages(int id)
    {
        try
        {
            Showcase? showcase = await _context.Showcases.FindAsync(id);
            if (showcase == null)
            {
                return NotFound("No showcase found with that ID.");
            }

            string imageFolderPath = Path.Combine(webHostEnvironment.WebRootPath, "images");
            string imagePrefix = Path.GetFileNameWithoutExtension(showcase.Image);
            string fallbackImagePrefix = GetImagePrefix(showcase.Image);

            List<string> images = GetNumberedImages(imageFolderPath, imagePrefix);

            if (images.Count == 0 && fallbackImagePrefix != imagePrefix)
            {
                images = GetNumberedImages(imageFolderPath, fallbackImagePrefix);
            }

            string fallbackImagePath = Path.Combine(imageFolderPath, showcase.Image);
            if (
                images.Count == 0 &&
                !string.IsNullOrWhiteSpace(showcase.Image) &&
                System.IO.File.Exists(fallbackImagePath)
            )
            {
                images.Add(showcase.Image);
            }

            return Ok(images);
        }
        catch (Exception e)
        {
            return StatusCode(500, $"Error: {e.Message}");
        }
    }

    private static List<string> GetNumberedImages(string imageFolderPath, string imagePrefix)
    {
        return Directory
            .GetFiles(imageFolderPath, $"{imagePrefix}-*.jpg")
            .Select(Path.GetFileName)
            .Where(fileName => fileName is not null && !fileName.Contains("thumbnail", StringComparison.OrdinalIgnoreCase))
            .Cast<string>()
            .OrderBy(fileName => GetImageNumber(imagePrefix, fileName))
            .ToList();
    }

    private static string GetImagePrefix(string imageName)
    {
        string fileNameWithoutExtension = Path.GetFileNameWithoutExtension(imageName);
        int dashIndex = fileNameWithoutExtension.LastIndexOf('-');

        if (
            dashIndex > 0 &&
            int.TryParse(fileNameWithoutExtension[(dashIndex + 1)..], out _)
        )
        {
            return fileNameWithoutExtension[..dashIndex];
        }

        return fileNameWithoutExtension;
    }

    private static int GetImageNumber(string imagePrefix, string imageName)
    {
        string fileNameWithoutExtension = Path.GetFileNameWithoutExtension(imageName);
        string numberPart = fileNameWithoutExtension.Replace($"{imagePrefix}-", "");

        return int.TryParse(numberPart, out int imageNumber) ? imageNumber : int.MaxValue;
    }
}
