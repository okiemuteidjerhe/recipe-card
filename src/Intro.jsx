import "./Intro.css"

function Intro() {
  return (
    <section>
      <article>
        <h1 className="first">Simple Omelette Recipe</h1>
        <p>
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>
      </article>

      <article>
        <div>
            <h2 className="second">Preparation time</h2>
            <ul className="child">
                <li><span className="span">Total</span>: Approximately 10 minutes</li>
                <li><span className="span">Preparation</span>: 5 minutes</li>
                <li><span className="span">Cooking</span>: 5 minutes</li>
            </ul>
        </div>
      </article>

      <article>
        <h2>Ingredients</h2>
        <ul>
          <li>2-3 large eggs</li>
          <li>Salt, to taste</li>
          <li>Pepper, to taste</li>
          <li>1 tablespoon of butter or oil</li>
          <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
        </ul>
      </article>
    </section>
  );
}

export default Intro;
