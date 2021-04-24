// Libraries
import React from 'react';

// Actions Linkage
import { store } from "../store";
import { setEffect } from "../actions";

// Render
class Effect extends React.Component {
	
	dispatchBtnAction(e) {
		const effect = e.target.dataset.effect;
		store.dispatch(setEffect(effect));
	}
	
	render() {
		return (
			<article className="effect">
				{this.props.effects.map((effect, i) => (
						<button
							data-effect={effect}
							key={`btn-${i}`}
							id={effect}
							onClick={this.dispatchBtnAction}
						>{effect}</button>
				))}
			</article>
		)
	}
}

export default Effect;