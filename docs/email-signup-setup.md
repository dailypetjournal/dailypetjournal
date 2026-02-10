# Email signup & automation (MailerLite – free, set once, then fully automated)

The home page shows a "Comfort in your inbox" signup form. Subscribers go to your MailerLite list; **you set up an automated sequence once** (e.g. "7 days of comfort") and it runs forever—no ongoing work. MailerLite’s free plan includes automation and supports up to **500 subscribers**, which fits a no-income site.

## 1. Create a MailerLite account and form

1. Sign up at [mailerlite.com](https://www.mailerlite.com) (free plan).
2. Create a **subscriber group** (e.g. "Newsletter" or "Comfort in your inbox") if you don’t have one: **Subscribers** → **Groups** → **Create group**.
3. Create an **embedded form** that adds signups to that group:
   - Go to **Forms** → **Embedded forms** → **Create form**.
   - Name it (e.g. "Comfort in your inbox"), choose your group, add an email field, and publish.
4. Get the **form submit URL**:
   - Open the form → **Share** or **Embed**.
   - In the embed code you’ll see a URL like `https://app.mailerlite.com/webforms/submit/XXXXX` (where XXXXX is your form ID). Copy that full URL.  
   - If they only show a JavaScript snippet, you can use the form ID from it: the submit URL is `https://app.mailerlite.com/webforms/submit/FORM_ID`.
5. Optional: In the form settings, set a **success redirect** to your thanks page, e.g. `https://dailypetjournal.com/subscribe/thanks`.

## 2. Add the URL to your site

In `.env.local` (and in Cloudflare Pages → Environment variables for production):

```env
NEXT_PUBLIC_NEWSLETTER_FORM_ACTION=https://app.mailerlite.com/webforms/submit/XXXXX
```

Replace `XXXXX` with your form ID. Restart the dev server (and redeploy); the "Comfort in your inbox" block will appear on the home page. The form is already set up to work with MailerLite (correct field names and hidden field).

## 3. Create your automated sequence (one-time setup)

This is what makes it **fully automated**—you do it once and never again.

1. In MailerLite go to **Automations** → **Create automation**.
2. Choose a trigger: **Subscriber joins a group** → select the group you use for the signup form.
3. Add steps to the workflow:
   - **Send email** – e.g. "Day 1 – Welcome + a verse" (send immediately).
   - **Wait** – e.g. 2 days.
   - **Send email** – "Day 2 – …"
   - Repeat for as many emails as you want (e.g. 7).
4. Write each email once (Scripture, a short reflection, maybe a link to an article on your site). Save and **activate** the automation.

After that, every new signup gets the sequence automatically. You don’t send anything manually.

## 4. Why MailerLite on the free plan

- **Free plan:** Up to 500 subscribers; automation workflows included.
- No cost for a no-income site; you can upgrade later if you grow.
- The site’s signup form is built to work with MailerLite (detects the form URL and uses the right fields).

## Summary

| Step | Effort |
|------|--------|
| Create MailerLite account + form + get submit URL | ~5 min |
| Add URL to env and deploy | ~2 min |
| Create automation and write 7 emails | One-time, ~1–2 hours |
| **Ongoing** | **Zero** – automation runs for every new subscriber |

No cron jobs, no code changes when you add or edit emails in the sequence. MailerLite handles sending and (if you enable it) double opt-in.
