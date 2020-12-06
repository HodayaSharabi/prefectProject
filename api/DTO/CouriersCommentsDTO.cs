using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
namespace Dto
{
    public class CouriersCommentsDTO
    {
        public int ResponseId { get; set; }
        public string FullName { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string Response { get; set; }
        public int CourierId { get; set; }
        public static CouriersCommentsDTO ConvertDto(CouriersComments c)
        {
            if (c == null)
                return null;
            return new CouriersCommentsDTO()
            {
                ResponseId = c.ResponseId,
                FullName = c.FullName,
                Phone = c.Phone,
                Email = c.Email,
                Response = c.Response,
                CourierId = c.CourierId,
            };
        }
        public static List<CouriersCommentsDTO> Listtodto(List<CouriersComments> list)
        {
            return list.Select(x => ConvertDto(x)).ToList();
        }
    }
}
