import React, {Component, PropTypes} from 'react';

// Styling
import { Label } from 'react-foundation-components/lib/label';
import { Button } from 'react-foundation-components/lib/button';
import { Collapse } from 'react-collapse';
import { ClearFix } from 'react-foundation-components/lib/float';
import 'font-awesome/scss/font-awesome.scss';

import * as detailPages from './detailPages';

class CardContent extends Component {

  state = {
    showDetail: false,
  };

  handleShowDetail = () => this.setState({showDetail: true});

  handleHideDetail = () => this.setState({showDetail: false});

  getListFormatMetaData() {
    const {
      distanceCenter,
      distanceStation,
    } = this.props.card.metadata;

    return (
      <div className="searchMetadata clearfix">
        {this.props.kind === 'location' &&
          <div>
            <div>Kapazität: {this.props.card.metadata.capacity}</div>
            <div>Konferenzräume: {this.props.card.metadata.conferenceRooms}</div>
          </div>
        }
        <ul className="distances">
          <li><span className="fa fa-dot-circle-o" /> {distanceCenter}</li>
          <li><span className="fa fa-train" /> {distanceStation}</li>
        </ul>
      </div>
    );
  }

  render() {
    const {
      card,
      kind
    } = this.props;

    const {
      showDetail,
    } = this.state;

    const dataAndButtonsExtraClass = kind === 'location' ? ' extraMetadata' : '';
    const onClickHandler = showDetail ? this.handleHideDetail : this.handleShowDetail;
    const picId = `pic${this.props.card.id % 2}0`;

    return (
      <ClearFix>
        <div className="resultTags">
          {card.tags.map(tag => <Label key={tag} color="primary">{tag}</Label>)}
        </div>
        <div className={`dataAndButtons clearfix ${dataAndButtonsExtraClass}`}>
          <ClearFix>
            {this.getListFormatMetaData()}
            <div className="resultButtons">
              <Button
                className="moreButton"
                color="secondary"
                size="small"
                onClick={() => {}}>
                <i className="fa fa-save"></i>
                merken
              </Button>
              <Button
                className="moreButton"
                color="secondary"
                size="small"
                onClick={onClickHandler}>
                <span className="fa fa-info"></span>
                {showDetail ? 'zuklappen' : 'mehr ...'}
              </Button>
            </div>
          </ClearFix>
        </div>
        <Collapse isOpened={this.state.showDetail}>
          <ClearFix className="resultDetails">
            <div>
              <img role="presentation" src={detailPages[picId]} />
            </div>
            <div className="textImage">
              <img role="presentation" src={detailPages[kind]} />
            </div>
          </ClearFix>
        </Collapse>
      </ClearFix>
    );
  }
}

CardContent.propTypes = {
  kind: PropTypes.string.isRequired,
  card: PropTypes.object.isRequired,
};

export default CardContent;
