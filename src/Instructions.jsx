import './Instructions.css'

function Instructions (){
    return (
        <section className='top'>
            <article>
                <h2>Instructions</h2>
                <ol>
                    <li><span className="span">Beat the eggs</span>: In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture. </li>
                    <li><span className="span">Heat the pan</span>: Place a non-stick frying pan over medium heat and add butter or oil. </li>
                    <li><span className="span">Cook the omelette</span>: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</li>
                    <li><span className="span">Add fillings (optional)</span>: When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette. </li>
                    <li><span className="span">Fold and serve</span>: As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate. </li>
                    <li><span className="span">Enjoy</span>: Serve hot, with additional salt and pepper if needed.</li>
                </ol>
            </article>
        </section>
    )
}

export default Instructions