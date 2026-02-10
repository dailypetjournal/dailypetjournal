# Email setup: hello@dailypetjournal.com → Gmail

This guide sets up **hello@dailypetjournal.com** so that:

1. **Incoming** mail to hello@dailypetjournal.com is delivered to **dailypetjournal@gmail.com**.
2. **Replies** can be sent as hello@dailypetjournal.com (optional).

---

## Part 1: Receive mail (hello@ → Gmail)

If your domain **dailypetjournal.com** uses **Cloudflare** for DNS (e.g. you use Cloudflare Pages):

### Cloudflare Email Routing

1. Log in at [dash.cloudflare.com](https://dash.cloudflare.com).
2. Select the **dailypetjournal.com** zone.
3. Go to **Email** → **Email Routing** (in the left sidebar).
4. If prompted, **enable Email Routing** and add the MX records Cloudflare shows (they’re added for you if DNS is managed by Cloudflare).
5. Open **Destination addresses** → **Add destination address**.
   - Enter: **dailypetjournal@gmail.com**
   - Confirm the verification email Cloudflare sends to that Gmail.
6. Open **Custom addresses** → **Add address**.
   - Custom address: **hello**
   - Action: **Forward to** → **dailypetjournal@gmail.com**
   - Save.

Mail sent to **hello@dailypetjournal.com** will now be forwarded to **dailypetjournal@gmail.com**.

---

If your domain is **not** on Cloudflare:

- Use the **email forwarding** feature at your domain registrar (e.g. Namecheap, Google Domains, etc.): create an alias **hello@dailypetjournal.com** that forwards to **dailypetjournal@gmail.com**.
- Or use a free service like **ImprovMX** or **Forward Email** and follow their instructions to point MX for your domain to them and set up forwarding to Gmail.

---

## Part 2: Send mail as hello@dailypetjournal.com (optional)

So that replies appear “From: hello@dailypetjournal.com”:

1. In **Gmail** (dailypetjournal@gmail.com): **Settings** (gear) → **See all settings** → **Accounts and Import**.
2. Under **Send mail as**, click **Add another email address**.
3. Enter:
   - **Name:** e.g. Daily Pet Journal  
   - **Email address:** hello@dailypetjournal.com  
   Leave “Treat as an alias” checked.
4. Click **Next**. Choose **Send through Gmail** (recommended).
5. Click **Add account**. Gmail will send a **verification code** to **hello@dailypetjournal.com**.
6. Because of Part 1, that email will be forwarded to dailypetjournal@gmail.com. Open it, get the code, enter it in Gmail, and verify.

After that you can choose **hello@dailypetjournal.com** as the “From” address when composing or replying.

---

## Quick reference

| Goal                         | Where to do it                    |
|-----------------------------|-----------------------------------|
| Receive hello@ at Gmail     | Cloudflare Email Routing (or registrar) |
| Reply as hello@             | Gmail → Settings → Send mail as   |
