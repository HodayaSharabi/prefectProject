using Dal;
using Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.cast
{
    public class ToCommentDto
    {
        public static CommentDto ConvertDto(Comment c)
        {
            if (c == null)
                return null;
            return new CommentDto()
            {
                ResponseId = c.ResponseId,
                FullName = c.FullName,
                Phone = c.Phone,
                Email = c.Email,
                Response = c.Response,
            };
        }
    }
}
