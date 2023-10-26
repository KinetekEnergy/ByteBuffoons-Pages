---
toc: True
comments: False
layout: post
title: Ideation Plan
type: plans
courses: {'compsci': {'week': 0}}
---

<!-- 
## Project Idea: Chrissie's Cookies
To simulate an e-commerce website that sells cookies made by Chrissie. With a back-end design utilizing backend APIs, advanced front-end design, and payment functionality.

## Team Roles
- Chrissie (DevOps)
- Arushi (Scrum Master)
- Shubhay (Frontend Developer)
- Aashray (Frontend + Some Backend)
- Harkirat (Backend Developer)

## Outline of Screens
- Home Screen
- Catalog Screen
- Checkout and Order Screen
- Plan Screen
   
## Timeline
| Date |                                                                                                                                                                                   |
|------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 10/2 | Brainstorming our passion project and deciding what tools to use                                                                                                                  |
| 10/3 | Creating a Figma design and looking for templates/starting elements. Also make Tech Talk Teaching                                                                                 |
| 10/4 | Break from the project and present for Tech Talk Teaching                                                                                                                         |
| 10/5 | Continue Figma Design & work on homework from Cayden's Tech Talk Teaching                                                                                                         |
| 10/6 | Work on Ideation Video. Convert this data to an HTML file talking about this data w/same wording. Add basic minimalistic design to text for aesthetics. Plan for passion project. |

## Home Screen
The main hero section of our page that utilizes design elements to tell the viewer what our website does and convince them to continue scrolling the other pages.

- The Hero section will pull in users using Tailwind CSS styling and 3D models and animations.
- Then the user will see a quick background that allows them to easily go to the catalog screen.
- If they continue to scroll they will see our social media and contact screens.
   
## Catalog Screen
The catalog screen is where the full catalog of products will be listed. We will use a mix of frontend and backend to make a good-looking, and efficient catalog that is easy to use.
- Main Features:
  - Checkout button to shift to the checkout bag and select products to buy.
    
## Checkout and Order Screen
The checkout screen will use Stripe for payment integration and utilize Sanity for data state management.
- The screen will use Sanity to be able to easily add products through the clicks of a few buttons.
- It will use a state manager to determine when the user clicks a product to add to the cart.
- The screen will then use Stripe to finish the transaction and send the confirmation to the main server indicating for the product to be shipped out. -->

<!-- <!DOCTYPE html> -->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chrissie's Cookies Project</title>
    <style>
        /* Add your CSS styles here */
        /* Example styles */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f2f2f2;
        }
        .section {
            background-color: #1e1f1c;
            padding: 20px;
            margin: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #d4cf00;
        }
        h2 {
            color: #d4cf00;
        }
        p, ul, li {
            color: #3e3e31;
        }
    </style>
</head>
<body>
    <div class="section">
        <h1   >Project Idea: Chrissie's Cookies</h1>
        <p>To simulate an e-commerce website that sells cookies made by Chrissie. With a back-end design utilizing backend APIs, advanced front-end design, and payment functionality.</p>
    </div>
    <div class="section">
        <h2>Team Roles</h2>
        <ul>
            <li>Chrissie (DevOps)</li>
            <li>Arushi (Scrum Master)</li>
            <li>Shubhay (Frontend Developer)</li>
            <li>Aashray (Frontend + Some Backend)</li>
            <li>Harkirat (Backend Developer)</li>
        </ul>
    </div>
    <div class="section">
        <h2>Outline of Screens</h2>
        <ul>
            <li>Home Screen</li>
            <li>Catalog Screen</li>
            <li>Checkout and Order Screen</li>
            <li>Plan Screen</li>
        </ul>
    </div>
    <div class="section">
        <h2>Timeline</h2>
        <table>
            <tr>
                <th>Date</th>
                <th>Task</th>
            </tr>
            <tr>
                <td>10/2</td>
                <td>Brainstorming our passion project and deciding what tools to use</td>
            </tr>
            <tr>
                <td>10/3</td>
                <td>Creating a Figma design and looking for templates/starting elements. Also make Tech Talk Teaching</td>
            </tr>
            <tr>
                <td>10/4</td>
                <td>Break from the project and present for Tech Talk Teaching</td>
            </tr>
            <tr>
                <td>10/5</td>
                <td>Continue Figma Design & work on homework from Cayden’s Tech Talk Teaching</td>
            </tr>
            <tr>
                <td>10/6</td>
                <td>Work on Ideation Video, Convert this data to an HTML file that talks about all of this data with the exact same wording and add in a very basic minimalistic design to the text that makes it look good. This is a plan for my passion project.</td>
            </tr>
        </table>
    </div>
    <div class="section">
        <h2>Home Screen</h2>
        <p>The main hero section of our page that utilizes design elements to tell the viewer what our website does and convince them to continue scrolling the other pages.</p>
        <ul>
            <li>The Hero section will pull in users using Tailwind CSS styling and 3D models and animations.</li>
            <li>Then the user will see a quick background that allows them to easily go to the catalog screen.</li>
            <li>If they continue to scroll they will see our social media and contact screens.</li>
        </ul>
    </div>
    <div class="section">
        <h2>Catalog Screen</h2>
        <p>The catalog screen is where the full catalog of products will be listed. We will use a mix of frontend and backend to make a good-looking, and efficient catalog that is easy to use.</p>
        <ul>
            <li>Main Features:</li>
            <li>Checkout button to shift to the checkout bag and select products to buy.</li>
        </ul>
    </div>
    <div class="section">
        <h2>Checkout and Order Screen</h2>
        <p>The checkout screen will use Stripe for payment integration and utilize Sanity for data state management.</p>
        <ul>
            <li>The screen will use Sanity to be able to easily add products through the clicks of a few buttons.</li>
            <li>It will use a state manager to determine when the user clicks a product to add to the cart.</li>
            <li>The screen will then use Stripe to finish the transaction and send the confirmation to the main server indicating for the product to be shipped out.</li>
        </ul>
    </div>
    <div class="section">
        <h2>Plan Screen</h2>
        <p>The plan screen will depict the step-by-step plans in chronological order to keep track of what we will have done by a certain time, and also being able to produce tangible results. The plan will showcase each person’s ideas and their work towards the end goal of the site.</p>
        <table>
            <tr>
                <th>Date</th>
                <th>Task</th>
            </tr>
            <tr>
                <td>10/2</td>
                <td>Brainstorming our passion project and deciding what tools to use</td>
            </tr>
            <tr>
                <td>10/3</td>
                <td>Creating a Figma design and looking for templates/starting elements. Also make Tech Talk Teaching</td>
            </tr>
            <tr>
                <td>10/4</td>
                <td>Break from the project and present for Tech Talk Teaching</td>
            </tr>
            <tr>
                <td>10/5</td>
                <td>Continue Figma Design & work on homework from Cayden’s Tech Talk Teaching</td>
            </tr>
            <tr>
                <td>10/6</td>
                <td>Work on Ideation Video </td>
            </tr>
            <!-- Add more timeline entries here if needed -->
        </table>
        <h1>Current Contributions</h1>
        <table>
            <table>
    <tr style="color: white;">
        <th>Date</th>
        <th>Aashray</th>
        <th>Arushi</th>
        <th>Chrissie</th>
        <th>Harkirat</th>
        <th>Shubhay</th>
    </tr>
    <tr>
        <td>10/2</td>
        <td>Add functionality to e-commerce website</td>
        <td>Incorporate Figma</td>
        <td>Concept of Chrissie’s Cookies</td>
        <td>Stocks</td>
        <td>Concept of e-commerce</td>
    </tr>
    <tr>
        <td>10/3</td>
        <td>Stripe for payment processing</td>
        <td>Templates on Figma/logo on Canva</td>
        <td>Template on Figma</td>
        <td>Flask for server-side</td>
        <td>Sanity for displaying products</td>
    </tr>
    <tr>
        <td>10/4</td>
        <td>Tech Talk</td>
        <td>Tech Talk</td>
        <td>Tech Talk</td>
        <td>Tech Talk</td>
        <td>Tech Talk</td>
    </tr>
    <tr>
        <td>10/5</td>
        <td>Set up dependencies with Harkirat</td>
        <td>Website design including the slogan</td>
        <td>Website Designing and adding features/template</td>
        <td>Worked on some backend and setup</td>
        <td>Figma Design and helping Chrissie/Arushi</td>
    </tr>
    <tr>
        <td>10/6</td>
        <td>Screen outline for payment & checkout</td>
        <td>Created ideation presentation, other screens</td>
        <td>Helped Harkirat with deployment</td>
        <td>Worked on deployment</td>
        <td>Did screen outline for home</td>
    </tr>
</table>
</body>
</html>

