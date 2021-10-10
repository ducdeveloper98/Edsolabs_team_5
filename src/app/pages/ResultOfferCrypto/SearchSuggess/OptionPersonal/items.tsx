import { Button } from '@mui/material';
import styled from 'styled-components/macro';
import staryellow from '../../../../../images/imagestar/staryellow.png';
import tick from '../../../../../images/imagetick/tick.png';
import warning from '../../../../../images/imagetick/warning.png';
import tag from '../../../../../images/imagetag/tag.png';
import { iconCoin } from './iconsCoins';
/*import { iconCoin } from './iconsCoins';
import listIcons from './listIcons';*/

const InforPersonal = styled.div`
  background: #282c37;
  width: 100%;
  border-radius: 20px;
  color: #ffffff;
  margin: 20px auto 24px auto;
  @media (max-width: 425px) {
    margin: 0;
  }
`;
const Data = styled.div`
  width: 100%;
  //padding-left: 20px;
  margin: 20px auto 20px 20px;
  @media (max-width: 425px) {
    padding: 16px 14px 30px 14px;
    margin: 0;
  }
`;
const View = styled.div`
  //padding-top: 20px;
  text-decoration-line: underline;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #2596ff;
  .tick {
    padding-left: 12px;
    font-size: 20px;
  }
  @media (max-width: 425px) {
    font-size: 16px;
    line-height: 20px;
  }
`;
const Rate = styled.div`
  max-width: 261px;
  padding-top: 10px;
  display: flex;
  .starYellow {
    width: 17px;
    height: 16px;
    margin-right: 5px;
    margin-top: 4px;
    @media (max-width: 425px) {
      width: 15px;
      height: 14px;
      margin-top: 0;
      margin-right: 6px;
    }
  }
  .signed {
    margin-left: auto;
    @media (max-width: 425px) {
      margin-left: 8px;
      margin-top: -1px;
    }
  }
  .separation {
    padding-left: 16px;
    height: 12px;
    @media (max-width: 425px) {
      padding-left: 8px;
      margin-top: -2px;
    }
  }
  @media (max-width: 425px) {
    font-size: 14px;
    line-height: 17px;
  }
`;
const Percent = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #3fd762;
  padding-top: 10px;
  .warning {
    padding-left: 7.5px;
  }
  @media (max-width: 425px) {
    font-size: 18px;
    line-height: 22px;
  }
`;
const Tag = styled(Button)`
  &.Tag {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #dba83d;
    border: 1px solid #dba83d;
    box-sizing: border-box;
    border-radius: 17px;
    text-transform: capitalize;
    margin-right: 10px;
    margin-top: 13px;
    .iconTag {
      margin-right: 8px;
    }
  }
`;
const Collateral = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #d1d1d3;
  padding-top: 16px;
  .renderIcon {
    display: flex;
    @media (max-width: 1024px) {
      margin-left: -165px;
      margin-top: 50px;
    }
    @media (max-width: 460px) {
      margin-top: 50px;
      margin-left: -145px;
    }
  }
  @media (max-width: 460px) {
    padding: 0;
    max-width: 287px;
    margin-top: -20px;
    font-size: 14px;
    line-height: 17px;
  }
`;
const Request = styled.div`
  max-width: 155px;
  background: linear-gradient(
    221.15deg,
    #bd8727 0%,
    #ffd574 49.02%,
    #feca50 62.02%,
    #bd8727 101.47%
  );
  border-radius: 1000px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #282c37;
  flex-direction: row;
  align-items: flex-start;
  padding: 14px 24px;
  margin: 0 auto 28px auto;
`;

export default function Items(props: any) {
  const { name, percent, collateral, request } = props;
  const newarray = [...iconCoin];
  const array = newarray.slice(0, 5);

  return (
    <InforPersonal>
      <Data>
        <View>
          {name}
          <img src={tick} alt="tick" className="tick" />
        </View>
        <Rate>
          <img src={staryellow} alt="star" className="starYellow" />
          1000
          <p className="separation">|</p>
          <p className="signed">100 signed contracts</p>
        </Rate>
        <Percent>
          {percent}
          <img src={warning} alt="warning" className="warning" />
        </Percent>

        <Tag className=" Tag">
          <img src={tag} alt="tag" className="iconTag" />
          Good LTV
        </Tag>
        <Tag className="Tag">
          <img src={tag} alt="tag" className="iconTag" />
          Fast Disburement
        </Tag>
        <Tag className="Tag">
          <img src={tag} alt="tag" className="iconTag" />
          Trusted
        </Tag>

        <Collateral>
          <div>{collateral}</div>
          <div className="renderIcon">
            {array.map(e => (
              <img
                src={e.url}
                alt=""
                style={{ height: '30px', padding: '5px' }}
              />
            ))}
            <p style={{ marginTop: '5px' }}>
              & {newarray.length} {''}more
            </p>
          </div>
        </Collateral>
      </Data>
      <Request>{request}</Request>
    </InforPersonal>
  );
}
