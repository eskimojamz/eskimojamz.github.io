import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';

const SkillsProgress = () => (
  <div>
    <h2 className="titleSeparate">Skills</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>

        <ProgressBar
          percent={70}
          showInfo={false}
          text="Javascript"
        />
        <ProgressBar
          percent={70}
          text="ReactJS"
        />
        <ProgressBar
          percent={70}
          text="NodeJS"
        />
        <ProgressBar
          percent={70}
          text="Python"
        />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar
          percent={60}
          text="Tensorflow"
        />
        <ProgressBar
          percent={70}
          text="MongoDB"
        />
        <ProgressBar
          percent={60}
          text="GraphQL"
        />
        <ProgressBar
          percent={70}
          text="Firebase"
        />
      </Col>
    </Row>
  </div>
);

export default SkillsProgress;
