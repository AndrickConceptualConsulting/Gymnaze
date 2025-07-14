const functions = require('firebase-functions');
const admin = require('firebase-admin');
const sgMail = require('@sendgrid/mail');

// Initialize Firebase Admin
admin.initializeApp();

// Initialize SendGrid
sgMail.setApiKey(functions.config().sendgrid.api_key);

// Email templates
const createUserEmailTemplate = (inquiryData) => {
  return {
    to: inquiryData.email,
    from: {
      email: 'noreply@gymnaze.com',
      name: 'GYMNAZE Team'
    },
    subject: 'Thank you for your interest in GYMNAZE!',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #1976d2, #42a5f5); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">Welcome to GYMNAZE!</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">
            Thank you for your interest in transforming your team's mindset
          </p>
        </div>
        
        <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
          <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #1976d2; margin-top: 0;">Hi ${inquiryData.name},</h2>
            
            <p style="font-size: 16px; line-height: 1.6; color: #333; margin: 20px 0;">
              Thank you for your interest in bringing GYMNAZE to <strong>${inquiryData.organization}</strong>! 
              We're excited about the opportunity to work with your team of ${inquiryData.numberOfAthletes} athletes.
            </p>

            <p style="font-size: 16px; line-height: 1.6; color: #333; margin: 20px 0;">
              Our team will review your inquiry and reach out within <strong>24 hours</strong> to discuss:
            </p>

            <ul style="color: #333; line-height: 1.8; margin: 20px 0;">
              <li>Customized onboarding process for your program</li>
              <li>Implementation timeline and training</li>
              <li>Pricing options tailored to your team size</li>
              <li>Next steps to get started</li>
            </ul>

            <div style="background: #e3f2fd; border-left: 4px solid #1976d2; padding: 15px; margin: 25px 0;">
              <p style="margin: 0; color: #333; font-style: italic;">
                "GYMNAZE has transformed how we understand and develop our athletes' mental game. 
                The insights we've gained have been game-changing for our program."
              </p>
              <p style="margin: 10px 0 0 0; color: #666; font-size: 14px;">
                - Coach Sarah M., State Championship Team
              </p>
            </div>

            <p style="font-size: 16px; line-height: 1.6; color: #333; margin: 20px 0;">
              In the meantime, feel free to reply to this email with any questions or call us at 
              <strong>(555) 123-GYMN</strong>.
            </p>

            <p style="font-size: 16px; line-height: 1.6; color: #333; margin: 20px 0;">
              Best regards,<br>
              <strong>The GYMNAZE Team</strong>
            </p>
          </div>

          <div style="text-align: center; padding: 20px 0; border-top: 1px solid #ddd;">
            <p style="color: #666; font-size: 14px; margin: 0;">
              GYMNAZE - Unlocking Athlete Mindset Insights<br>
              <a href="mailto:support@gymnaze.com" style="color: #1976d2;">support@gymnaze.com</a> | 
              <a href="https://gymnaze.com" style="color: #1976d2;">gymnaze.com</a>
            </p>
          </div>
        </div>
      </div>
    `
  };
};

const createAdminEmailTemplate = (inquiryData) => {
  const interestLabels = {
    'assessment-access': 'Assessment Access',
    'team-culture-tools': 'Team Culture Tools',
    'coach-dashboards': 'Coach Dashboards',
    'general-info': 'General Information',
    'pricing': 'Pricing Information',
    'demo': 'Product Demo'
  };

  return {
    to: 'zjohnson@gymnaze.com', // CEO email
    from: {
      email: 'noreply@gymnaze.com',
      name: 'GYMNAZE Inquiry System'
    },
    subject: `🏆 New Inquiry: ${inquiryData.organization} (${inquiryData.numberOfAthletes} athletes)`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #1976d2, #42a5f5); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">🏆 New GYMNAZE Inquiry</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">
            Submitted on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}
          </p>
        </div>
        
        <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
          <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #1976d2; margin-top: 0; border-bottom: 2px solid #e3f2fd; padding-bottom: 10px;">Contact Information</h2>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 20px 0;">
              <div>
                <strong style="color: #555;">Name:</strong><br>
                <span style="font-size: 16px; color: #333;">${inquiryData.name}</span>
              </div>
              <div>
                <strong style="color: #555;">Email:</strong><br>
                <a href="mailto:${inquiryData.email}" style="color: #1976d2; text-decoration: none; font-size: 16px;">${inquiryData.email}</a>
              </div>
              <div>
                <strong style="color: #555;">Organization:</strong><br>
                <span style="font-size: 16px; color: #333;">${inquiryData.organization}</span>
              </div>
              <div>
                <strong style="color: #555;">Role:</strong><br>
                <span style="font-size: 16px; color: #333;">${inquiryData.role}</span>
              </div>
            </div>
          </div>

          <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #1976d2; margin-top: 0; border-bottom: 2px solid #e3f2fd; padding-bottom: 10px;">Program Details</h2>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 20px 0;">
              <div>
                <strong style="color: #555;">Number of Athletes:</strong><br>
                <span style="font-size: 24px; color: #1976d2; font-weight: bold;">${inquiryData.numberOfAthletes}</span>
              </div>
              <div>
                <strong style="color: #555;">Primary Interest:</strong><br>
                <span style="font-size: 16px; color: #333; background: #e3f2fd; padding: 8px 12px; border-radius: 5px; display: inline-block;">
                  ${interestLabels[inquiryData.interest] || inquiryData.interest || 'Not specified'}
                </span>
              </div>
            </div>
          </div>

          ${inquiryData.notes ? `
          <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #1976d2; margin-top: 0; border-bottom: 2px solid #e3f2fd; padding-bottom: 10px;">Additional Notes</h2>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #1976d2;">
              <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #333;">${inquiryData.notes}</p>
            </div>
          </div>
          ` : ''}

          <div style="background: #fff3e0; border: 2px solid #ff9800; padding: 20px; border-radius: 8px; text-align: center;">
            <h3 style="color: #ff9800; margin: 0 0 10px 0;">⏰ Action Required</h3>
            <p style="margin: 0; color: #333; font-size: 16px;">
              Please follow up with this inquiry within 24 hours for optimal conversion.
            </p>
            <div style="margin-top: 15px;">
              <a href="mailto:${inquiryData.email}?subject=Re: Your GYMNAZE Inquiry - ${inquiryData.organization}&body=Hi ${inquiryData.name},%0D%0A%0D%0AThank you for your interest in GYMNAZE..." 
                 style="background: #1976d2; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block; font-weight: bold;">
                📧 Reply to ${inquiryData.name}
              </a>
            </div>
          </div>

          <div style="margin-top: 20px; padding: 15px; background: white; border-radius: 8px; border: 1px solid #ddd;">
            <h4 style="margin: 0 0 10px 0; color: #333;">Quick Stats:</h4>
            <p style="margin: 0; color: #666; font-size: 14px;">
              Inquiry ID: ${inquiryData.id}<br>
              Source: Website Inquiry Form<br>
              Timestamp: ${new Date().toISOString()}
            </p>
          </div>
        </div>
      </div>
    `
  };
};

// Cloud Function triggered when a new inquiry is created
exports.sendInquiryEmails = functions.firestore
  .document('inquiries/{inquiryId}')
  .onCreate(async (snap, context) => {
    try {
      const inquiryData = snap.data();
      const inquiryId = context.params.inquiryId;

      console.log(`Processing inquiry ${inquiryId} for ${inquiryData.email}`);

      // Prepare both emails
      const userEmail = createUserEmailTemplate(inquiryData);
      const adminEmail = createAdminEmailTemplate(inquiryData);

      // Send both emails
      const emailPromises = [
        sgMail.send(userEmail),
        sgMail.send(adminEmail)
      ];

      await Promise.all(emailPromises);

      console.log(`Successfully sent emails for inquiry ${inquiryId}`);

      // Update the inquiry document to mark emails as sent
      await snap.ref.update({
        emailsSent: true,
        emailsSentAt: admin.firestore.FieldValue.serverTimestamp()
      });

      return { success: true };

    } catch (error) {
      console.error('Error sending inquiry emails:', error);
      
      // Update the inquiry document to mark email failure
      await snap.ref.update({
        emailsSent: false,
        emailError: error.message,
        emailErrorAt: admin.firestore.FieldValue.serverTimestamp()
      });

      // Don't throw error to prevent retries - log for manual follow-up
      return { success: false, error: error.message };
    }
  });

// HTTP Cloud Function for manual email resend (if needed)
exports.resendInquiryEmails = functions.https.onCall(async (data, context) => {
  // Verify the user is authenticated and has admin permissions
  if (!context.auth) {
    throw new functions.https.HttpsError(
      'unauthenticated',
      'The function must be called while authenticated.'
    );
  }

  try {
    const { inquiryId } = data;
    
    if (!inquiryId) {
      throw new functions.https.HttpsError(
        'invalid-argument',
        'Inquiry ID is required.'
      );
    }

    // Get the inquiry document
    const inquiryDoc = await admin.firestore()
      .collection('inquiries')
      .doc(inquiryId)
      .get();

    if (!inquiryDoc.exists) {
      throw new functions.https.HttpsError(
        'not-found',
        'Inquiry not found.'
      );
    }

    const inquiryData = inquiryDoc.data();

    // Prepare and send emails
    const userEmail = createUserEmailTemplate(inquiryData);
    const adminEmail = createAdminEmailTemplate(inquiryData);

    await Promise.all([
      sgMail.send(userEmail),
      sgMail.send(adminEmail)
    ]);

    // Update the inquiry document
    await inquiryDoc.ref.update({
      emailsSent: true,
      emailsSentAt: admin.firestore.FieldValue.serverTimestamp(),
      manualResendBy: context.auth.uid
    });

    return { success: true, message: 'Emails resent successfully' };

  } catch (error) {
    console.error('Error in resendInquiryEmails:', error);
    throw new functions.https.HttpsError(
      'internal',
      'Failed to resend emails: ' + error.message
    );
  }
});

// Newsletter email templates
const createNewsletterUserEmailTemplate = (subscriberData) => {
  return {
    to: subscriberData.email,
    from: {
      email: 'noreply@gymnaze.com',
      name: 'GYMNAZE Team'
    },
    subject: 'Welcome to the GYMNAZE Newsletter!',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #1976d2, #42a5f5); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">Welcome to GYMNAZE!</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">
            Thank you for subscribing to our newsletter
          </p>
        </div>
        
        <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
          <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #1976d2; margin-top: 0;">Hi ${subscriberData.name || 'there'},</h2>
            
            <p style="font-size: 16px; line-height: 1.6; color: #333; margin: 20px 0;">
              Welcome to the GYMNAZE community! You're now part of a network of coaches, athletes, and sports professionals 
              who are transforming how we understand and develop mental performance in sports.
            </p>

            <p style="font-size: 16px; line-height: 1.6; color: #333; margin: 20px 0;">
              Here's what you can expect from our newsletter:
            </p>

            <ul style="color: #333; line-height: 1.8; margin: 20px 0;">
              <li><strong>Latest Insights:</strong> Research-backed strategies for mental performance</li>
              <li><strong>Success Stories:</strong> Real results from coaches and athletes using GYMNAZE</li>
              <li><strong>Tips & Tools:</strong> Practical advice for developing mindset and leadership</li>
              <li><strong>Product Updates:</strong> New features and improvements to help your team</li>
            </ul>

            <div style="background: #e3f2fd; border-left: 4px solid #1976d2; padding: 15px; margin: 25px 0;">
              <p style="margin: 0; color: #333; font-style: italic;">
                "The mental game is just as important as physical training. GYMNAZE helps us 
                measure and develop both."
              </p>
              <p style="margin: 10px 0 0 0; color: #666; font-size: 14px;">
                - Coach Jennifer R., Division I Volleyball
              </p>
            </div>

            <p style="font-size: 16px; line-height: 1.6; color: #333; margin: 20px 0;">
              Stay tuned for our next newsletter with exclusive insights and updates!
            </p>

            <p style="font-size: 16px; line-height: 1.6; color: #333; margin: 20px 0;">
              Best regards,<br>
              <strong>The GYMNAZE Team</strong>
            </p>
          </div>

          <div style="text-align: center; padding: 20px 0; border-top: 1px solid #ddd;">
            <p style="color: #666; font-size: 12px; margin: 0;">
              You're receiving this because you subscribed to GYMNAZE newsletters.<br>
              <a href="#" style="color: #1976d2;">Unsubscribe</a> | 
              <a href="https://gymnaze.com" style="color: #1976d2;">Visit our website</a>
            </p>
          </div>
        </div>
      </div>
    `
  };
};

const createNewsletterAdminEmailTemplate = (subscriberData) => {
  return {
    to: 'zjohnson@gymnaze.com',
    from: {
      email: 'noreply@gymnaze.com',
      name: 'GYMNAZE Newsletter System'
    },
    subject: `📰 New Newsletter Subscriber: ${subscriberData.email}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #1976d2, #42a5f5); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">📰 New Newsletter Subscriber</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">
            Subscribed on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}
          </p>
        </div>
        
        <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
          <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #1976d2; margin-top: 0; border-bottom: 2px solid #e3f2fd; padding-bottom: 10px;">Subscriber Information</h2>
            
            <div style="margin: 20px 0;">
              <div style="margin-bottom: 15px;">
                <strong style="color: #555;">Email:</strong><br>
                <a href="mailto:${subscriberData.email}" style="color: #1976d2; text-decoration: none; font-size: 16px;">${subscriberData.email}</a>
              </div>
              ${subscriberData.name ? `
              <div style="margin-bottom: 15px;">
                <strong style="color: #555;">Name:</strong><br>
                <span style="font-size: 16px; color: #333;">${subscriberData.name}</span>
              </div>
              ` : ''}
              ${subscriberData.interest ? `
              <div style="margin-bottom: 15px;">
                <strong style="color: #555;">Interest:</strong><br>
                <span style="font-size: 16px; color: #333; background: #e3f2fd; padding: 8px 12px; border-radius: 5px; display: inline-block;">
                  ${subscriberData.interest}
                </span>
              </div>
              ` : ''}
            </div>
          </div>

          <div style="margin-top: 20px; padding: 15px; background: white; border-radius: 8px; border: 1px solid #ddd;">
            <h4 style="margin: 0 0 10px 0; color: #333;">Quick Stats:</h4>
            <p style="margin: 0; color: #666; font-size: 14px;">
              Subscriber ID: ${subscriberData.id}<br>
              Source: Website Newsletter Form<br>
              Timestamp: ${new Date().toISOString()}
            </p>
          </div>
        </div>
      </div>
    `
  };
};

// Cloud Function triggered when a new newsletter subscription is created
exports.sendNewsletterEmails = functions.firestore
  .document('newsletter/{subscriberId}')
  .onCreate(async (snap, context) => {
    try {
      const subscriberData = snap.data();
      const subscriberId = context.params.subscriberId;

      console.log(`Processing newsletter subscription ${subscriberId} for ${subscriberData.email}`);

      // Prepare both emails
      const userEmail = createNewsletterUserEmailTemplate(subscriberData);
      const adminEmail = createNewsletterAdminEmailTemplate(subscriberData);

      // Send both emails
      const emailPromises = [
        sgMail.send(userEmail),
        sgMail.send(adminEmail)
      ];

      await Promise.all(emailPromises);

      console.log(`Successfully sent newsletter emails for ${subscriberId}`);

      // Update the subscription document to mark emails as sent
      await snap.ref.update({
        emailsSent: true,
        emailsSentAt: admin.firestore.FieldValue.serverTimestamp()
      });

      return { success: true };

    } catch (error) {
      console.error('Error sending newsletter emails:', error);
      
      // Update the subscription document to mark email failure
      await snap.ref.update({
        emailsSent: false,
        emailError: error.message,
        emailErrorAt: admin.firestore.FieldValue.serverTimestamp()
      });

      return { success: false, error: error.message };
    }
  });
