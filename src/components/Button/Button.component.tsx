/* eslint-disable react/jsx-props-no-spreading */
import { CloseSquareOutlined, MinusSquareOutlined } from '@ant-design/icons';
import {
 Button, Col, Modal, Skeleton, Card,
} from 'antd';
import { ButtonProps } from 'antd/lib/button/index';
import React, {
 FC, memo, lazy, Suspense, useState, MouseEvent,
} from 'react';
import CustomButtonProps from './interfaces';

const CustomButton: FC<ButtonProps & CustomButtonProps> = ({
 col,
 modal,
 onClick,
 modalProps = { centered: true, destroyOnClose: true },
 ...rest
}) => {
  let ShowModal = null;
  const [openModal, changeOpenModal] = useState(false);
  if (modal && modal.length > 0) {
    ShowModal = lazy(() => import(`../../${modal}`));
  }
  return (
    <Col {...col}>
      <Button
        onClick={(event: MouseEvent<HTMLElement, globalThis.MouseEvent>): void => {
          event.stopPropagation();
          if (modal && modal.length > 0) {
            changeOpenModal(true);
          }
          if (onClick) {
            onClick(event);
          }
        }}
        {...rest}
      />
      {
        ShowModal
        && (
          <Modal
            visible={modalProps.visible || openModal}
            closable={false}
            {...modalProps}
            bodyStyle={modalProps.bodyStyle || { padding: 0 }}
          >
            <Suspense fallback={<Skeleton />}>
              <Card
                title={modalProps && modalProps.title}
                extra={(
                  <>
                    <MinusSquareOutlined
                      style={{ fontSize: 20, padding: '0px 5px' }}
                    />
                    <CloseSquareOutlined
                      style={{ fontSize: 20, padding: '0px 5px' }}
                      onClick={(): void => changeOpenModal(false)}
                    />
                  </>
                )}
              >
                <ShowModal />
              </Card>
            </Suspense>
          </Modal>
        )
      }
    </Col>
  );
};

export default memo(CustomButton);
