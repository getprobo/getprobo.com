# Compliance Portal documentation screenshots

Store the production screenshots listed below in this directory. The files are served from
`/docs/compliance-portal/`. Capture current production UI with a fictional organization and
visitor account; do not substitute mockups.

## Console captures

### `create-portal.webp`

- **State:** The **Create Compliance Portal** form is open with a fictional entity name,
  before submission.
- **Crop:** Form panel only, including the entity name field and create action.
- **Alt text:** `Create Compliance Portal form with an entity name`

### `portal-status.webp`

- **State:** An existing inactive portal's settings show the activation and search-engine
  indexing controls.
- **Crop:** Status settings card, including both toggles and their labels.
- **Alt text:** `Compliance Portal status settings with activation and indexing toggles`

### `brand-settings.webp`

- **State:** Profile and visual identity settings contain a fictional company name,
  description, light logo, dark logo, and one custom link.
- **Crop:** Branding form from the profile fields through the logo and link controls.
- **Alt text:** `Compliance Portal profile, logo, and custom link settings`

### `custom-domain-dns.webp`

- **State:** A syntactically valid fictional custom domain has been entered and its DNS
  instructions are visible.
- **Crop:** Custom-domain card only, including the hostname, verification state, and required
  DNS record; omit unrelated browser chrome.
- **Alt text:** `Custom domain settings showing the DNS record required for verification`

### `publishing-content.webp`

- **State:** The portal **Files** tab contains representative files with **Not published**,
  **Public**, and **Restricted** visibility.
- **Crop:** File list and visibility controls, keeping the item names and all three states
  readable.
- **Alt text:** `Compliance Portal files with Not published, Public, and Restricted visibility`

### `access-review.webp`

- **State:** A pending visitor request for multiple restricted documents is open in the
  administrator review dialog.
- **Crop:** Request details and grant/reject controls; include requested resources and NDA
  status, but exclude navigation and unrelated requests.
- **Alt text:** `Administrator review of a visitor request for restricted portal documents`

### `nda-settings.webp`

- **State:** The portal NDA section shows a fictional PDF uploaded and ready for visitors,
  without exposing the document body or signer data.
- **Crop:** NDA configuration card, including the file and replace/remove actions.
- **Alt text:** `Compliance Portal NDA configuration with an uploaded agreement`

### `subprocessors-settings.webp`

- **State:** The subprocessor tab contains several fictional third parties already added to
  the portal.
- **Crop:** Subprocessor list and the **Add subprocessor** action.
- **Alt text:** `Subprocessors selected for publication in a Compliance Portal`

### `mailing-list.webp`

- **State:** The **Subscribers** view contains fictional confirmed and pending subscribers.
- **Crop:** Mailing-list table and status labels; exclude email addresses.
- **Alt text:** `Compliance Portal mailing list with confirmed and pending subscribers`

### `send-update.webp`

- **State:** A fictional compliance update is ready to send and the confirmation is open.
- **Crop:** Draft title and body plus the send confirmation, without subscriber details.
- **Alt text:** `Compliance update draft with its send confirmation`

### `rights-requests-toggle.webp`

- **State:** The portal status settings show **Rights requests** enabled.
- **Crop:** Rights-request setting and explanatory label.
- **Alt text:** `Rights requests enabled in Compliance Portal settings`

### `multiple-portals.webp`

- **State:** The Compliance Portals overview contains at least two fictional active and
  inactive portals.
- **Crop:** Portal list with entity names, domains, and statuses.
- **Alt text:** `Compliance Portals overview with multiple portals`

### `search-engine-indexing.webp`

- **State:** An active portal has **Search engine indexing** enabled.
- **Crop:** Activation and indexing controls together.
- **Alt text:** `Active Compliance Portal with search engine indexing enabled`

### `portal-permissions.webp`

- **State:** A Viewer opens a portal configuration page with editing controls unavailable.
- **Crop:** One representative read-only settings section and role context.
- **Alt text:** `Read-only Compliance Portal settings for a Viewer`

### `slack-integration.webp`

- **State:** Slack is connected to a fictional notification channel.
- **Crop:** Integration card with connected status and fictional channel name.
- **Alt text:** `Slack channel connected for Compliance Portal access notifications`

## Public portal captures

### `portal-home.webp`

- **State:** An active fictional portal's public home page is signed out and contains a logo,
  description, frameworks, commitments, and navigation.
- **Crop:** Full page content from header through the first complete content sections; omit
  browser chrome.
- **Alt text:** `Public Compliance Portal home page with frameworks and commitments`

### `portal-documents.webp`

- **State:** The public documents page is signed out and shows both public and locked
  fictional documents.
- **Crop:** Page heading, filters, and enough of the document list to show both access states.
- **Alt text:** `Public portal documents page with public and locked documents`

### `restricted-document.webp`

- **State:** A signed-out visitor has opened a restricted document and sees the locked state
  and access-request action.
- **Crop:** Document title, lock explanation, and request-access action.
- **Alt text:** `Locked Compliance Portal document prompting the visitor to request access`

### `bulk-access-request.webp`

- **State:** A visitor has selected at least two locked documents and opened the bulk request
  flow before submission.
- **Crop:** Selected-document summary and request action, excluding account identifiers.
- **Alt text:** `Bulk access request for multiple locked Compliance Portal documents`

### `nda-signing.webp`

- **State:** An authenticated fictional visitor is in the NDA acceptance/signing step before
  final submission.
- **Crop:** Agreement heading, acknowledgement or signature fields, and continue action; do
  not show a real signature.
- **Alt text:** `Visitor NDA signing step before exporting portal documents`

### `subprocessors-catalog.webp`

- **State:** The public subprocessor page contains several fictional providers and an active
  filter.
- **Crop:** Heading, filter controls, and representative catalog rows.
- **Alt text:** `Public Compliance Portal subprocessor catalog with filtering`

### `rights-request-form.webp`

- **State:** Rights requests are enabled and an authenticated fictional visitor has opened the
  form before submission.
- **Crop:** Form only, including request type, identity/contact fields, and submit action.
- **Alt text:** `Public Compliance Portal form for submitting a privacy rights request`

### `updates-feed.webp`

- **State:** The public **Updates** section shows several fictional sent updates and the
  signed-in visitor's subscription action.
- **Crop:** Page heading, representative updates, and subscription control.
- **Alt text:** `Public Compliance Portal updates feed with subscription control`

## Redaction and capture rules

- Use only fictional organization, domain, document, vendor, visitor, and update data.
- Remove or replace personal names, email addresses, signatures, avatars, account IDs,
  request IDs, internal URLs, API tokens, and notification destinations.
- Never capture real NDA text, customer documents, audit reports, subscriber lists, access
  requests, rights-request details, or third-party contracts.
- Use reserved example values such as `Acme Security`, `portal.example.com`, and
  `visitor@example.com`; do not blur secrets that could instead be removed before capture.
- Keep timestamps and status labels only when they explain the documented state. Replace
  identifying values before capture rather than painting over pixels afterward.
- Capture at 2× device scale where possible. Keep text crisp, avoid browser chrome unless it
  explains a domain, and crop tightly without cutting off labels, menus, validation messages,
  or primary actions.
- Use a consistent light theme unless a screenshot specifically demonstrates dark-logo
  behavior.

## Lossless WebP

Crop and redact the PNG first, then convert it without resizing:

```sh
cwebp -lossless <crop>.png -o <exact-filename>.webp
```

Open the WebP after conversion to confirm that text, focus rings, selected states, and
redactions remain legible.
