# week44

1. Kunne bruge react komponenter og kommunikation mellem Komponenter:

Vi startede med at gøre brug af komponenter tirsdag hvor vi gør brug af export/import for at kunne arbejde med diverse komponenter i vores projekt. Alt i react foregår via komponenter hvor man bygger et komponent op med sit eget hovedformål. Derved undgår man redundant kode og kan genbruge komponenter, som kan genbruges flere steder i sin applikation. Der er klasse og funktions komponenter. Det kan bruges ved bla. at sende props med som en slags variable og returnere et react element som bliver renderet og vist på klientsiden.

Eks: https://github.com/Amazingh0rse/week44/blob/main/tuesday/src/App.js
Se App.js hvor vi øverst importer vores komponenter og gør f.eks. brug af dem i linje 42-44

2. Kunne bruge JSX samt forklare hvilket problem JSX løser for os.

JSX er en JavaScript extension, der gør det muligt for os at kunne skrive HTML elementer i vores JavaScript uden brug af en masse DOM objekter (eks. document.getElementById()). 

Eks: på dette ses igen i samme link: https://github.com/Amazingh0rse/week44/blob/main/tuesday/src/App.js
Se funktionen App() fra linje 32-59

3. Kunne forklare og demonstrere brug af props i React
Props står for properties og er stateless. Dvs. det bruges som read-only og ikke til at ændre en value, hvor state bruges i stedet. Props bruges til at sende data fra en component til en anden. Props sendes altid fra parrent til child. For at kunne gå fra child til parrent skal man bruge "lifting state up".

Eks: https://github.com/Amazingh0rse/week44/blob/main/tuesday/src/file3.js
Se i file3.js i linje 15-17, som sender en prop videre til funktionen Welcome i linje 5

4. Kunne forklare og demonstrere brug af state i React med Hooks via useState
