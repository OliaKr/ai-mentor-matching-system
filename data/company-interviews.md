# Sample Company Interviews for Testing

Use these sample interviews to test the matching workflow.

## Interview 1: E-commerce Startup

**Company:** StyleHub  
**Stage:** Early-stage startup  
**Expected Matches:** Sarah Johnson, Lisa Wang

```json
{
  "interview_text": "We're building StyleHub, a sustainable fashion e-commerce platform. We launched 6 months ago and have 5,000 monthly users, but growth has plateaued. Our main challenge is customer acquisition - we're spending too much on ads without great ROI. We need help with digital marketing strategy, specifically SEO and content marketing to build organic traffic. We also need guidance on improving our user experience because our conversion rate is only 1.2%. Our team is technical but lacks marketing expertise. We're in the e-commerce and sustainable fashion sector."
}
```

**Expected Skills Extracted:**

- 1st_skill: Digital Marketing
- 2nd_skill: SEO
- 3rd_skill: User Experience Design
- sector: E-commerce

---

## Interview 2: B2B SaaS Startup

**Company:** DataFlow Analytics  
**Stage:** Series A  
**Expected Matches:** Michael Chen, Priya Sharma

```json
{
  "interview_text": "DataFlow Analytics provides real-time data analytics for enterprise clients. We have 50 customers and $2M ARR, but we're struggling with technical scalability. Our platform crashes when customers process large datasets. We need expertise in cloud architecture and system design to rebuild our infrastructure on AWS. We're also looking to incorporate machine learning features for predictive analytics, but our team lacks ML expertise. Additionally, we need help with data pipeline optimization. We operate in the B2B SaaS and data analytics sector."
}
```

**Expected Skills Extracted:**

- 1st_skill: Cloud Architecture
- 2nd_skill: Machine Learning
- 3rd_skill: Data Science
- sector: SaaS

---

## Interview 3: HealthTech Startup

**Company:** CareConnect  
**Stage:** Seed stage  
**Expected Matches:** Emily Rodriguez, Priya Sharma

```json
{
  "interview_text": "CareConnect is building a telemedicine platform connecting patients with mental health professionals. We just raised our seed round and are preparing to launch our MVP. Our biggest challenge is finding product-market fit - we're not sure if our current feature set addresses real user needs. We need guidance on product strategy, user research methodologies, and how to iterate quickly based on feedback. We're also concerned about healthcare compliance and regulations. Our sector is healthcare technology, specifically digital health and telemedicine."
}
```

**Expected Skills Extracted:**

- 1st_skill: Product Management
- 2nd_skill: User Experience Design
- 3rd_skill: Healthcare Technology
- sector: Healthcare

---

## Interview 4: CleanTech Startup

**Company:** SolarGrid Innovations  
**Stage:** Pre-seed  
**Expected Matches:** David Kim, Robert Taylor

```json
{
  "interview_text": "SolarGrid is developing smart energy management systems for residential solar installations. We're in the pre-seed stage and about to start fundraising. We need help with business strategy - specifically how to position ourselves in the competitive clean energy market. We also need guidance on supply chain management since we'll be manufacturing hardware components. Our team is technical but we lack business and fundraising experience. We need someone who understands the sustainability sector and can help us prepare our pitch deck and financial projections."
}
```

**Expected Skills Extracted:**

- 1st_skill: Business Strategy
- 2nd_skill: Fundraising
- 3rd_skill: Supply Chain Management
- sector: Clean Energy / Sustainability

---

## Interview 5: Enterprise Software Startup

**Company:** TeamSync Pro  
**Stage:** Growth stage  
**Expected Matches:** James Patterson, Robert Taylor

```json
{
  "interview_text": "TeamSync Pro offers collaboration software for remote teams. We have 200 customers, mostly small businesses, but we want to move upmarket to enterprise clients. Our challenge is we don't know how to do enterprise sales. Our current sales process works for SMBs but enterprise deals are different - longer sales cycles, multiple stakeholders, complex negotiations. We need to build an enterprise sales team and create a repeatable sales process. We're also looking for advice on pricing strategy for enterprise contracts. We operate in the B2B SaaS sector."
}
```

**Expected Skills Extracted:**

- 1st_skill: Enterprise Sales
- 2nd_skill: B2B Sales Strategy
- 3rd_skill: Sales Team Management
- sector: SaaS

---

## Interview 6: Mobile App Startup

**Company:** FitTrack  
**Stage:** Early stage  
**Expected Matches:** Lisa Wang, Priya Sharma

```json
{
  "interview_text": "FitTrack is a fitness tracking mobile app with AI-powered workout recommendations. We have 50,000 downloads but our retention is poor - only 15% of users are active after one month. We need expertise in user experience design to redesign our onboarding flow and make the app more engaging. We also want to improve our ML recommendation algorithm using user data and A/B testing. Our challenge is balancing feature development with user retention. We're in the consumer mobile app and fitness tech sector."
}
```

**Expected Skills Extracted:**

- 1st_skill: User Experience Design
- 2nd_skill: Machine Learning
- 3rd_skill: A/B Testing
- sector: Consumer Tech

---

## Interview 7: Fintech Startup

**Company:** PayEase  
**Stage:** Series A  
**Expected Matches:** Michael Chen, Robert Taylor

```json
{
  "interview_text": "PayEase is building a payment processing platform for small businesses in emerging markets. We've raised $5M Series A and need to scale rapidly. Our technical challenges include handling payment security, building APIs for third-party integrations, and ensuring 99.9% uptime. We need mentorship on fintech infrastructure, security best practices, and regulatory compliance. We're also preparing for Series B fundraising and need advice on growth metrics that VCs care about. We operate in the fintech and payments sector."
}
```

**Expected Skills Extracted:**

- 1st_skill: Full-Stack Development
- 2nd_skill: API Design
- 3rd_skill: Venture Capital
- sector: Fintech

---

## Interview 8: General Tech Startup

**Company:** InnovateCo  
**Stage:** Idea stage  
**Expected Matches:** (Will vary based on available mentors)

```json
{
  "interview_text": "We're a team of three technical founders with an idea for a productivity tool but we're not sure how to validate it or where to start. We need help with everything - product strategy, user research, go-to-market planning, and fundraising. We have technical skills but zero business experience. We're looking for a generalist mentor who can guide us through the early stages of building a startup, from idea validation to finding product-market fit to raising a pre-seed round."
}
```

**Expected Skills Extracted:**

- 1st_skill: Product Management
- 2nd_skill: Business Strategy
- 3rd_skill: Fundraising
- sector: Technology / SaaS

---

## How to Use These Samples

1. **Copy the JSON** from any interview above
2. **Send POST request** to your n8n webhook endpoint
3. **Review the matches** - check if the right mentors are matched
4. **Verify explanations** - ensure AI provides relevant reasoning

## Testing Tips

- Start with **Interview 1** (clearest needs)
- Test **Interview 8** to see how the system handles vague requests
- Mix and match elements from different interviews
- Create your own custom interviews based on real companies

## Expected Response Format

You should receive JSON like this:

```json
{
  "success": true,
  "company_needs": {
    "primary_skill": "Digital Marketing",
    "secondary_skill": "SEO",
    "tertiary_skill": "User Experience Design",
    "sector": "E-commerce"
  },
  "matched_mentors": [
    {
      "rank": 1,
      "name": "Sarah Johnson",
      "email": "sarah.johnson@email.com",
      "match_score": 80,
      "skills": ["Digital Marketing", "SEO", "Content Strategy"],
      "sector": "E-commerce",
      "current_role": "Head of Marketing at TechCorp",
      "available_slots": 3,
      "explanation": "Sarah is an excellent match with 10 years of digital marketing expertise...",
      "match_details": "Primary skill match: Digital Marketing, Secondary skill match: SEO"
    }
  ],
  "timestamp": "2025-01-07T10:00:00.000Z"
}
```

