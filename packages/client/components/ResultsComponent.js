import React from 'react';
import DatePicker from 'react-datepicker';
import Moment from 'react-moment';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as indexActions from '../stores/initState';
import ResultsTablePrizesComponent from './ResultsTablePrizesComponent';

import { ETHHERSCAN_LINK } from '../constants/index';

let dataResults = {
  dateDraw: new Date(),
  numberListWinning: [1, 2, 66, 9, 2, 7],
  resultsPrizes: [
    {
      division: '1 prize',
      match: '5+PB',
      payoutPerWinner: 'No Winners',
      jackpot: '',
      payoutPerWinners: 'No Winners'
    },
    {
      division: '2 prize',
      match: '5',
      payoutPerWinner: '$ 1,000,000.00',
      jackpot: '',
      payoutPerWinners: '$ 1,000,000.00'
    },
    {
      division: '3 prize',
      match: '4+PB',
      payoutPerWinner: '$ 500,000.00',
      jackpot: '',
      payoutPerWinners: '$ 500,000.00'
    },
    {
      division: '4 prize',
      match: '4',
      payoutPerWinner: '$ 100,000.00',
      jackpot: '',
      payoutPerWinners: '$ 400,000.00'
    }
  ],
  hash: '0xfa968aacfe53ff25a49a315b50c1d945f521d464c1cfc19e07a6660885b612d1'
};

const NumbersWinningList = ({ numbers }) => {
  let winningList = [];
  for (let i = 0; i < numbers.length; i++) {
    winningList.push(
      <li
        className={i === numbers.length - 1 ? 'item highlight' : 'item'}
        key={i}
        value={numbers[i]}
      >
        {numbers[i]}
      </li>
    );
  }
  return winningList;
};

const connectToRedux = connect(
  state => ({
    ...state
  }),
  distpatch => ({
    indexActions: bindActionCreators(indexActions, distpatch)
  })
);
class ResultsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: dataResults['dateDraw'] || new Date(),
      numberListWinning: dataResults['numberListWinning'] || [],
      prizeBreakdown: dataResults['resultsPrizes'] || [],
      hash: dataResults['hash'] || null
    };
  }

  onChangeSeletedDate = date => {
    this.setState({
      selectedDate: date
    });
  };

  render() {
    const {
      selectedDate,
      prizeBreakdown,
      numberListWinning,
      hash
    } = this.state;
    return (
      <div id="results" className="flex-split">
        <div className="container">
          <div className="flex-intro wow fadeIn">
            <div className="result-container result-detail text-left">
              <h2 className="title">Winning Numbers</h2>
              <form className="from-filter d-flex ">
                <div className="form-group">
                  <label htmlFor="date-from" className="pr-3">
                    Select date
                  </label>
                  <DatePicker
                    selected={selectedDate}
                    maxDate={new Date()}
                    onChange={this.onChangeSeletedDate}
                    onSelect={this.handleSelect}
                  />
                </div>
              </form>
              <div className="result-date title font-weight-normal mt-3 mb-3">
                Draw results&nbsp;
                <span className="font-weight-bold">
                  <Moment
                    className="datetime"
                    aria-hidden={true}
                    format="D MMM YYYY HH:mm:ss"
                    withTitle
                    locale="vi"
                  >
                    {selectedDate}
                  </Moment>
                </span>
              </div>
              <div className="row-numbers mt-3 mb-3">
                <ul className="number-list">
                  <NumbersWinningList numbers={numberListWinning} />
                </ul>
              </div>
              <div className="result-hash mt-3 mb-3">
                Hash:&nbsp;
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`${ETHHERSCAN_LINK}${hash}`}
                >
                  {hash}
                </a>
              </div>
            </div>
            <div className="result-container prize-breakdown">
              <h2 className="text-left title">Prize Breakdown</h2>
              <ResultsTablePrizesComponent prizeBreakdown={prizeBreakdown} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connectToRedux(ResultsComponent);
