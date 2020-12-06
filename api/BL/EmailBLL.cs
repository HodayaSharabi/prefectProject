using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System;
using System.Net.Mail;

namespace BL
{
    public class EmailBLL
    {

        public static void sendEmail(Email email)
        {
            try
            {
                MailMessage mail = new MailMessage();
                SmtpClient SmtpServer = new SmtpClient("smtp.gmail.com");

                mail.From = new MailAddress("shipmentcsompany@gmail.com");
                mail.To.Add(email.email);
                mail.Subject = email.Subject;
                mail.IsBodyHtml = true;
                mail.Body = "<br />" +
                 "<h1 >" + email.Body + "</h1>" +
              @"<img src="" title.png""cid:"" />";

                SmtpServer.Port = 587;
                SmtpServer.Credentials = new System.Net.NetworkCredential("shipmentcsompany@gmail.com", "michalhodaya");
                SmtpServer.EnableSsl = true;

                SmtpServer.Send(mail);
                //MessageBox.Show("mail Send");
            }
            catch (Exception ex)
            {
                throw (ex);
            }
        }
    }
}
public class Email
{
    public string email { get; set; }
    public string Subject { get; set; }
    public string Body { get; set; }

}
