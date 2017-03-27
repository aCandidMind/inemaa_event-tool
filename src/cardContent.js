import React, {Component, PropTypes} from 'react';

// Styling
import { Label } from 'react-foundation-components/lib/label';
import { Button } from 'react-foundation-components/lib/button';
import { Reveal } from 'react-foundation-components/lib/reveal';
import { CloseButton } from 'react-foundation-components/lib/close-button';
import { Float, ClearFix } from 'react-foundation-components/lib/float';

import * as detailPages from './detailPages';

class CardContent extends Component {

  state = {
    showDetail: false,
  };

  handleShowDetail = () => this.setState({showDetail: true});

  handleHideDetail = () => this.setState({showDetail: false});

  render() {
    const {
      card,
      kind
    } = this.props;

    const {
      showDetail,
    } = this.state;

    return (
      <div className="resultTags">
        {card.tags.map(tag => <Label color="primary">{tag}</Label>)}
        <ClearFix>
          <Float position="right">
            <Button
              className="moreButton"
              color="secondary"
              size="tiny"
              onClick={this.handleShowDetail}>
              <i className="fi-info"></i>
              mehr ...
            </Button>
            <Reveal onHide={this.handleHideDetail} show={showDetail}>
              <CloseButton onClick={this.handleHideDetail} />
              <h1>{card.title} <small>{kind}</small></h1>
              <img role="presentation" src={detailPages[kind]} />
            </Reveal>
          </Float>
        </ClearFix>
      </div>
    );
  }
}

CardContent.propTypes = {
  kind: PropTypes.string.isRequired,
  card: PropTypes.object.isRequired,
};

export default CardContent;
