using System.ComponentModel.DataAnnotations;

public class RegisterDto
{
    [Required]
    [MinLength(8)]
    [MaxLength(24)]
    public required string UserId { get; set; }

    [Required]
    [EmailAddress]
    public required string Email { get; set; }

    [Required]
    [MinLength(8)]
    [MaxLength(24)]
    public required string Password { get; set; }

    [Required]
    [MinLength(2)]
    [MaxLength(16)]
    public required string Nickname { get; set; }
}
