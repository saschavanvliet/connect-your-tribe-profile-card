# Visitekaartje

Redesign je visitekaartje en bouw het met NodeJS en een REST API.

De instructie vind je in: [INSTRUCTIONS](https://github.com/fdnd-task/connect-your-tribe-profile-card/blob/main/docs/INSTRUCTIONS.md)


## Inhoudsopgave Readme

  * [Beschrijving](#beschrijving)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Gebruik](#gebruik)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
<!-- Voeg een mooie poster visual toe 📸 -->
<img width="1000" alt="image" src="https://github.com/user-attachments/assets/a5a84e6d-1ce5-4226-a70a-b35d2081bde2" />
<img width="1000" alt="image" src="https://github.com/user-attachments/assets/d646e6c6-f948-4d70-87b2-780df3ace6e8" />

<!-- Voeg een link toe naar Github Pages 🌐-->
https://connect-your-tribe-profile-card-wufv.onrender.com/

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met Javascript gedaan en hoe? Misschien heb je een framwork of library gebruikt? -->
Dynamisch Visitekaartje met JSON en API. Het digitale visitekaartje wordt automatisch gegenereerd met behulp van gegevens die via de Whois API van FDND worden opgehaald. Je hoeft geen handmatige data in te voeren, omdat de informatie direct uit de database wordt geladen. Het project maakt gebruik van JSON voor de gegevensoverdracht en REST API voor het ophalen van de data. Dit zorgt ervoor dat het visitekaartje altijd up-to-date is, afhankelijk van de wijzigingen die in de database worden aangebracht.

## Installatie
- HTML voor de structuur van de pagina (liquid packages)
- CSS voor de styling van het visitekaartje en de pagina.
- JavaScript voor interactieve elementen en het genereren van het visitekaartje.
- Node.js
- JSON: Bestan voor het ophalen van dynamische gegevens van de Whois API van FDND.

## Gebruik
In dit project heb ik geleerd hoe ik een digitaal visitekaartje maak met dynamische data. In plaats van hardgecodeerde teksten en afbeeldingen in je HTML, haal je de content nu op via een API. De data komt uit een database en kan eenvoudig worden aangepast via een beheersysteem. Dit maakt websites veel flexibeler, omdat de content zonder dat je de code hoeft aan te passen, kan worden geüpdatet door gebruikers of beheerders. Ik heb het visitiekaartje uit sprint 1 eerst in nodeJS bestanden gezet (view en public). Vervolgens heb ik de code dynamisch gemaakt door gegevens van mijzelf, zoals mijn naam, mijn haarkleur (custom property JavaScript) en andere relevante informatie opgehaald uit de Whois API. Vervolgens wordt deze data verwerkt en in een stijlvol en responsief ontwerp gepresenteerd door gebruik te maken van html en css. 

**Wat is een API en hoe werkt deze?**
Een API (Application Programming Interface) is een middel waarmee verschillende softwaretoepassingen met elkaar kunnen communiceren. In dit project gebruiken we een REST API, die via HTTP-aanroepen gegevens opvraagt in JSON-formaat. Dit maakt het mogelijk om dynamische gegevens op te halen en in een front-end interface te presenteren.



## Bronnen
- [FDND directus](https://fdnd.directus.app/items/person/?fields=*,squads.squad_id.name,squads.squad_id.cohort&filter=%7B%22_and%22:%5B%7B%22squads%22:%7B%22squad_id%22:%7B%22tribe%22:%7B%22name%22:%22FDND%20Jaar%201%22%7D%7D%7D%7D,%7B%22squads%22:%7B%22squad_id%22:%7B%22cohort%22:%222425%22%7D%7D%7D%5D%7D&sort=name)
- [Persoonlijke gegevens, id: 185](https://fdnd.directus.app/items/person/?filter=%7B%22id%22:185%7D)
- [JSON](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/JSON)
- [Introducing JSON](https://www.json.org/json-en.html)
- [Query parameters directus](https://directus.io/docs/guides/connect/query-parameters)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [Installatie NodeJS](https://nodejs.org/en/)
- [Terminal openen](https://www.youtube.com/watch?v=OmQhOnBzg_k)
- [Introductie NodeJS](https://nodejs.dev/en/learn/)
- [The Liquid Template Language](https://liquidjs.com/tutorials/intro-to-liquid.html)
- [Liquid Filters](https://liquidjs.com/filters/overview.html)
- [Using the Fetch API @ MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [Express documentatie](https://expressjs.com/en/5x/api.html) (geavanceerd)
- [JSON.parse() @ MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
- [Partial commits in GitHub Desktop](https://github.blog/news-insights/product-news/partial-commits-in-github-for-windows/)
- [Committing and reviewing changes to your project in GitHub Desktop](https://docs.github.com/en/desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project-in-github-desktop)
- [How Deploys Work](https://render.com/docs/deploys)
- [Skipping an auto-deploy](https://render.com/docs/deploys#skipping-an-auto-deploy)
- [Troubleshooting Your Deploy @ Render](https://render.com/docs/troubleshooting-deploys)

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).

