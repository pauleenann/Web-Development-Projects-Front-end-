import React from 'react'
import './ButtonPage.css'
import Button from '../Button/Button'

const ButtonPage = () => {
  return (
    <div className='buttonpage-container'>
      <h1>Buttons</h1>
      {/* default button */}
      <div className="two-button">
        <div>
            <p className='element'>{'<Button />'}</p>
            <Button />
        </div>
        <div>
            <p className='hover-style'>{'&:hover, &:focus'}</p>
            <Button />
        </div>
      </div>

      {/* variant outline */}
      <div className="two-button">
        <div>
            <p className='element'>{'<Button variant="outline" />'}</p>
            <Button variant="outline"/>
        </div>
        <div>
            <p className='hover-style'>{'&:hover, &:focus'}</p>
            <Button variant="outline"/>
        </div>
      </div>

       {/* variant text */}
       <div className="two-button">
        <div>
            <p className='element'>{'<Button variant="text" />'}</p>
            <Button variant="text outline"/>
        </div>
        <div>
            <p className='hover-style'>{'&:hover, &:focus'}</p>
            <Button variant="text outline"/>
        </div>
      </div>

      {/* disableShadow */}
      <div className='one-button'>
        <p className='element'>{'<Button disableShadow />'}</p>
        <Button disableShadow/>
      </div>

        {/* disabled*/}
       <div className="two-button">
        <div>
            <p className='element'>{'<Button disabled />'}</p>
            <Button disabled/>
        </div>
        <div>
            <p className='element'>{'<Button variant="text" disabled />'}</p>
            <Button variant="text" disabled/>
        </div>
      </div>

      {/* disableShadow */}
      <div className='one-button'>
        <p className='element'>{'<Button disableShadow />'}</p>
        <Button disableShadow/>
      </div>

        {/* local_grocery_store*/}
       <div className="two-button">
        <div>
            <p className='element'>{'<Button startIcon="local_grocery_store"/>'}</p>
            <Button startIcon="local_grocery_store"/>
        </div>
        <div>
            <p className='element'>{'<Button endIcon="local_grocery_store"/>'}</p>
            <Button endIcon="local_grocery_store"/>
        </div>
      </div>

      {/* button sizes */}
      <div className="three-button">
        <div>
            <p className='element'>{'<Button size="sm"/>'}</p>
            <Button size="sm"/>
        </div>
        <div>
            <p className='element'>{'<Button size="md"/>'}</p>
            <Button size="md"/>
        </div>
        <div>
            <p className='element'>{'<Button size="lg"/>'}</p>
            <Button size="lg"/>
        </div>
      </div>

      {/* button color */}
      <div className="four-button">
        <div>
            <p className='element'>{'<Button color="default"/>'}</p>
            <Button color="default"/>
        </div>
        <div>
            <p className='element'>{'<Button color="primary"/>'}</p>
            <Button color="primary"/>
        </div>
        <div>
            <p className='element'>{'<Button color="secondary"/>'}</p>
            <Button color="secondary"/>
        </div>
        <div>
            <p className='element'>{'<Button color="secondary"/>'}</p>
            <Button color="danger"/>
        </div>
      </div>

      {/* button color */}
      <div className="four-button">
        <div>
            <p className='hover-style'>{'&:hover, &:focus'}</p>
            <Button color="default"/>
        </div>
        <div>
            <Button color="primary"/>
        </div>
        <div>
            <Button color="secondary"/>
        </div>
        <div>
            <Button color="danger"/>
        </div>
      </div>

      <footer>
        <p>created by <span className='username'>pau</span> - devChallenges.io</p>
      </footer>

    </div>
  )
}

export default ButtonPage
