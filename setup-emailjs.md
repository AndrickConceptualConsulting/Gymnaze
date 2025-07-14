{{notes}}
{{/notes}}

SUBMISSION DETAILS:
• Date: {{submission_date}}
• Time: {{submission_time}}
• Inquiry ID: {{inquiry_id}}

ACTION REQUIRED: Please follow up within 24 hours for optimal conversion.

Reply directly to {{user_email}} to respond to this inquiry.
```
- **Note the Template ID** (example: `template_inquiry_admin`)

### Template 3: Newsletter User Welcome
- **Template Name**: `Newsletter User Welcome`
- **Subject**: `Welcome to the GYMNAZE Newsletter!`
- **Content**:
```
Hi {{user_name}},

Welcome to the GYMNAZE community! You're now part of a network of coaches, athletes, and sports professionals who are transforming mental performance in sports.

Here's what you can expect from our newsletter:
• Latest insights and research-backed strategies
• Success stories from coaches and athletes using GYMNAZE
• Tips & tools for developing mindset and leadership
• Product updates and new features

{{#interest}}We noticed you're interested in: {{interest}}{{/interest}}

Stay tuned for exclusive insights and updates!

Best regards,
The GYMNAZE Team

---
You can unsubscribe at any time by replying to this email.
GYMNAZE - Unlocking Athlete Mindset Insights
```
- **Note the Template ID** (example: `template_newsletter_user`)

### Template 4: Newsletter Admin Notification
- **Template Name**: `Newsletter Admin Notification`
- **Subject**: `📰 New Newsletter Subscriber: {{user_email}}`
- **Content**:
```
New Newsletter Subscriber

SUBSCRIBER INFORMATION:
• Email: {{user_email}}
• Name: {{user_name}}
{{#interest}}• Interest: {{interest}}{{/interest}}

SUBSCRIPTION DETAILS:
• Date: {{subscription_date}}
• Time: {{subscription_time}}
• Subscriber ID: {{subscriber_id}}

Total subscribers growing! 🎉
```
- **Note the Template ID** (example: `template_newsletter_admin`)

## Step 5: Update Your Environment Variables

Update your `.env` file with your EmailJS credentials:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_PUBLIC_KEY=user_xyz789
VITE_EMAILJS_USER_INQUIRY_TEMPLATE_ID=template_inquiry_user
VITE_EMAILJS_ADMIN_INQUIRY_TEMPLATE_ID=template_inquiry_admin
VITE_EMAILJS_NEWSLETTER_USER_TEMPLATE_ID=template_newsletter_user
VITE_EMAILJS_NEWSLETTER_ADMIN_TEMPLATE_ID=template_newsletter_admin

# CEO Email for notifications
VITE_CEO_EMAIL=zjohnson@gymnaze.com
```

## Step 6: Test Your Setup

1. **Restart your development server**:
   ```bash
   npm run dev
   ```

2. **Fill out both forms on your website**:
   - Inquiry form (at `/inquiry`)
   - Newsletter form (at `/newsletter`)

3. **Check your email** for:
   - User confirmation emails
   - Admin notification emails

4. **Check browser console** for any EmailJS errors

## Step 7: Configure Email Settings in EmailJS Dashboard

### Set Email Settings:
1. **Go to EmailJS Dashboard → Email Services**
2. **Click on your Gmail service**
3. **Configure these settings**:
   - **From Name**: `GYMNAZE Team`
   - **From Email**: `noreply@gymnaze.com` (or your preferred email)
   - **Reply To**: Your support email

### Rate Limits:
- **Free EmailJS**: 200 emails/month
- **Paid plans**: Higher limits available

## Troubleshooting

### Common Issues:

1. **"EmailJS not configured" in console**:
   - Check that all environment variables are set
   - Restart your development server
   - Verify no typos in template IDs

2. **Emails not sending**:
   - Check EmailJS dashboard for error logs
   - Verify templates are published (not draft)
   - Check your Gmail service connection

3. **Template variables not showing**:
   - Ensure template variable names match exactly: `{{user_name}}`
   - Variables are case-sensitive
   - Check for typos in template content

4. **Permission errors**:
   - Re-authorize Gmail connection in EmailJS
   - Check that your Gmail account has proper permissions

### Debug Mode:
To see detailed EmailJS logs, add this to your browser console:
```javascript
localStorage.setItem('emailjs_debug', 'true');
```

## Cost Structure

### EmailJS Free Tier:
- **200 emails/month**
- **Perfect for starting out**

### Upgrade Options:
- **Personal**: $15/month (1,000 emails)
- **Business**: $35/month (5,000 emails)

## Security Notes

- ✅ **EmailJS keys are safe** to expose in client-side code
- ✅ **Templates are server-side** and cannot be modified by users
- ✅ **Rate limiting** prevents spam/abuse
- ✅ **Your Gmail credentials** are never exposed

## Next Steps

1. **Set up templates** in EmailJS dashboard
2. **Update `.env` file** with your credentials
3. **Test both forms** thoroughly
4. **Monitor EmailJS dashboard** for email delivery stats

## Production Checklist

Before going live:
- [ ] All 4 templates created and tested
- [ ] Environment variables updated
- [ ] Both forms tested end-to-end
- [ ] Email content reviewed and approved
- [ ] EmailJS service connection verified
- [ ] Rate limits understood and appropriate plan selected

---

**Support**: If you need help with EmailJS setup, check their [documentation](https://www.emailjs.com/docs/) or contact their support team.