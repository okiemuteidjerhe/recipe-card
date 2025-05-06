import './Nutrition.css'

function Nutrition(){
    return(
        <section className='top nutri'>
            <article>
                <h2>Nutrition</h2>
                <p>The table below shows nutritional values per serving without the additional fillings. </p>
                <div className='table'>
                    <div className="value">
                        <p>Calories</p>
                        <p>277kcal</p>
                    </div>
                    <div className="value">
                        <p>Carbs</p>
                        <p>0g</p>
                    </div>
                    <div className="value">
                        <p>Protein</p>
                        <p>20g</p>
                    </div>
                    <div className="value">
                        <p>Fat</p>
                        <p>22g</p>
                    </div>
                </div>    
            </article>
        </section>
    )
}

export default Nutrition
 
  
 
