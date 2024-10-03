using System.ComponentModel.DataAnnotations;

public class LoginDto
{
    [Required]
    [MinLength(8)]
    [MaxLength(24)]
    public required string UserId { get; set; }

    [Required]
    [MinLength(8)]
    [MaxLength(24)]
    public required string Password { get; set; }
}
