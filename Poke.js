var PokePromise = d3.json("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151")
PokePromise.then(
function(data)
{
    console.log(data);
    d3.select("h1").text("Welcome To My Pokemon App!")
    var promises = data.results.map(function(d){return info(d.name)})
    Promise.all(promises).then(function(poke)
    {
        poke.sort(function(a, b)
                 {return a.id - b.id})
        makeTable(poke)
    })
},
function(err)
{
    console.log("Error", err)
    d3.select("h1").text("No Pokemon Found")
})

var info = function(pokemon){return d3.json("https://pokeapi.co/api/v2/pokemon/" + pokemon)}

var makeTable = function(pokemon)
{
    var row = d3.select("tbody")
                .selectAll("tr")
                .data(pokemon)
                .enter()
                .append("tr");
    row.append("td").text(function(d) {return d.id})
    row.append("td").text(function(d) {return d.name}).on("click", function(d)
    {
        var Array = [d]
        return d3.select("img")
        .data(Array)
        .attr("src", d.sprites.front_default)
})
    row.append("td").text(function(d) {return d.stats[5].base_stat})
    row.append("td").text(function(d) {return d.stats[4].base_stat})
    row.append("td").text(function(d) {return d.stats[3].base_stat})
    row.append("td").text(function(d) {return d.stats[2].base_stat})
    row.append("td").text(function(d) {return d.stats[1].base_stat})
    row.append("td").text(function(d) {return d.stats[0].base_stat})
    row.append("td").text(function(d) {return d.weight})
    row.append("td").text(function(d) {return d.height})
}
var deleteBody = function()
    {
        d3.select("table").remove()
    }
var GetSprite = function(pokemon)
{

}
