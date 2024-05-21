﻿namespace ProjectII
{
    public class Routes
    {
        public int Id { get; set; }
        public string Source { get; set; } // where the train starts
        public string Destination { get; set; }
        public int TrainId { get; set; }
        public Train Train { get; set; }
        public DateTime DepartureTime { get; set; }
        public DateTime ArrivalTime { get; set; }
    }
}
