using System.ComponentModel.DataAnnotations;

namespace ProiectII.BusinessModels.Models
{
    public class Ticket
    {
        [Key]
        public int Id { get; set; }
        public int UserId { get; set; }
        public int SeatNumber { get; set; }
        public int TrainId { get; set; }
    }
}
