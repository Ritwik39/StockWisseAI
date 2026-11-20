using Microsoft.AspNetCore.Mvc;

namespace StockWise.Api.Controllers;

/// <summary>Lets the frontend (or a person) check that the API is running.</summary>
[ApiController]
[Route("api/health")]
public class HealthController : ControllerBase
{
    [HttpGet]
    public IActionResult Get() => Ok(new { status = "ok" });
}
