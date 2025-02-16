import {
  BrokerId,
  ClusterName,
  ConnectName,
  ConnectorName,
  ConsumerGroupID,
  SchemaName,
  TopicName,
} from 'redux/interfaces';

import { GIT_REPO_LINK } from './constants';

export const gitCommitPath = (commit: string) =>
  `${GIT_REPO_LINK}/commit/${commit}`;

export enum RouteParams {
  clusterName = ':clusterName',
  consumerGroupID = ':consumerGroupID',
  subject = ':subject',
  topicName = ':topicName',
  connectName = ':connectName',
  connectorName = ':connectorName',
  brokerId = ':brokerId',
}

export const getNonExactPath = (path: string) => `${path}/*`;

export const clusterPath = (
  clusterName: ClusterName = RouteParams.clusterName
) => `/ui/clusters/${clusterName}`;

export type ClusterNameRoute = { clusterName: ClusterName };

// Brokers
export const clusterBrokerRelativePath = 'brokers';
export const clusterBrokersPath = (
  clusterName: ClusterName = RouteParams.clusterName
) => `${clusterPath(clusterName)}/${clusterBrokerRelativePath}`;

export const clusterBrokerPath = (
  clusterName: ClusterName = RouteParams.clusterName,
  brokerId: BrokerId | string = RouteParams.brokerId
) => `${clusterBrokersPath(clusterName)}/${brokerId}`;

export type ClusterBrokerParam = { clusterName: ClusterName; brokerId: string };

// Consumer Groups
export const clusterConsumerGroupsRelativePath = 'consumer-groups';
export const clusterConsumerGroupResetRelativePath = 'reset-offsets';
export const clusterConsumerGroupResetOffsetsRelativePath = `${RouteParams.consumerGroupID}/${clusterConsumerGroupResetRelativePath}`;
export const clusterConsumerGroupsPath = (
  clusterName: ClusterName = RouteParams.clusterName
) => `${clusterPath(clusterName)}/${clusterConsumerGroupsRelativePath}`;
export const clusterConsumerGroupDetailsPath = (
  clusterName: ClusterName = RouteParams.clusterName,
  groupId: string = RouteParams.consumerGroupID
) => `${clusterConsumerGroupsPath(clusterName)}/${groupId}`;
export const clusterConsumerGroupResetOffsetsPath = (
  clusterName: ClusterName = RouteParams.clusterName,
  groupId: string = RouteParams.consumerGroupID
) =>
  `${clusterConsumerGroupDetailsPath(
    clusterName,
    groupId
  )}/${clusterConsumerGroupResetRelativePath}`;
export type ClusterGroupParam = {
  consumerGroupID: ConsumerGroupID;
  clusterName: ClusterName;
};

// Schemas
export const clusterSchemasRelativePath = 'schemas';
export const clusterSchemaNewRelativePath = 'create-new';
export const clusterSchemaEditPageRelativePath = `edit`;
export const clusterSchemaSchemaDiffPageRelativePath = `diff`;
export const clusterSchemaEditRelativePath = `${RouteParams.subject}/${clusterSchemaEditPageRelativePath}`;
export const clusterSchemaSchemaDiffRelativePath = `${RouteParams.subject}/${clusterSchemaSchemaDiffPageRelativePath}`;
export const clusterSchemasPath = (
  clusterName: ClusterName = RouteParams.clusterName
) => `${clusterPath(clusterName)}/schemas`;
export const clusterSchemaNewPath = (
  clusterName: ClusterName = RouteParams.clusterName
) => `${clusterSchemasPath(clusterName)}/${clusterSchemaNewRelativePath}`;
export const clusterSchemaPath = (
  clusterName: ClusterName = RouteParams.clusterName,
  subject: SchemaName = RouteParams.subject
) => `${clusterSchemasPath(clusterName)}/${subject}`;
export const clusterSchemaEditPath = (
  clusterName: ClusterName = RouteParams.clusterName,
  subject: SchemaName = RouteParams.subject
) => `${clusterSchemasPath(clusterName)}/${subject}/edit`;
export const clusterSchemaSchemaDiffPath = (
  clusterName: ClusterName = RouteParams.clusterName,
  subject: SchemaName = RouteParams.subject
) => `${clusterSchemaPath(clusterName, subject)}/diff`;

export type ClusterSubjectParam = {
  subject: string;
  clusterName: ClusterName;
};

// Topics
export const clusterTopicsRelativePath = 'topics';
export const clusterTopicNewRelativePath = 'create-new';
export const clusterTopicCopyRelativePath = 'copy';
export const clusterTopicsPath = (
  clusterName: ClusterName = RouteParams.clusterName
) => `${clusterPath(clusterName)}/${clusterTopicsRelativePath}`;
export const clusterTopicNewPath = (
  clusterName: ClusterName = RouteParams.clusterName
) => `${clusterTopicsPath(clusterName)}/${clusterTopicNewRelativePath}`;
export const clusterTopicCopyPath = (
  clusterName: ClusterName = RouteParams.clusterName
) => `${clusterTopicsPath(clusterName)}/${clusterTopicCopyRelativePath}`;

// Topics topic
export const clusterTopicSettingsRelativePath = 'settings';
export const clusterTopicMessagesRelativePath = 'messages';
export const clusterTopicConsumerGroupsRelativePath = 'consumer-groups';
export const clusterTopicEditRelativePath = 'edit';
export const clusterTopicSendMessageRelativePath = 'message';
export const clusterTopicPath = (
  clusterName: ClusterName = RouteParams.clusterName,
  topicName: TopicName = RouteParams.topicName
) => `${clusterTopicsPath(clusterName)}/${topicName}`;
export const clusterTopicSettingsPath = (
  clusterName: ClusterName = RouteParams.clusterName,
  topicName: TopicName = RouteParams.topicName
) =>
  `${clusterTopicPath(
    clusterName,
    topicName
  )}/${clusterTopicSettingsRelativePath}`;
export const clusterTopicMessagesPath = (
  clusterName: ClusterName = RouteParams.clusterName,
  topicName: TopicName = RouteParams.topicName
) =>
  `${clusterTopicPath(
    clusterName,
    topicName
  )}/${clusterTopicMessagesRelativePath}`;
export const clusterTopicEditPath = (
  clusterName: ClusterName = RouteParams.clusterName,
  topicName: TopicName = RouteParams.topicName
) =>
  `${clusterTopicPath(clusterName, topicName)}/${clusterTopicEditRelativePath}`;
export const clusterTopicConsumerGroupsPath = (
  clusterName: ClusterName = RouteParams.clusterName,
  topicName: TopicName = RouteParams.topicName
) =>
  `${clusterTopicPath(
    clusterName,
    topicName
  )}/${clusterTopicConsumerGroupsRelativePath}`;
export const clusterTopicSendMessagePath = (
  clusterName: ClusterName = RouteParams.clusterName,
  topicName: TopicName = RouteParams.topicName
) =>
  `${clusterTopicPath(
    clusterName,
    topicName
  )}/${clusterTopicSendMessageRelativePath}`;

export type RouteParamsClusterTopic = {
  clusterName: ClusterName;
  topicName: TopicName;
};

// Kafka Connect
export const clusterConnectsRelativePath = 'connects';
export const clusterConnectorsRelativePath = 'connectors';
export const clusterConnectorNewRelativePath = 'create-new';
export const clusterConnectConnectorsRelativePath = `${RouteParams.connectName}/connectors`;
export const clusterConnectConnectorRelativePath = `${clusterConnectConnectorsRelativePath}/${RouteParams.connectorName}`;
export const clusterConnectConnectorEditRelativePath = `${clusterConnectConnectorRelativePath}/edit`;
export const clusterConnectConnectorTasksRelativePath = 'tasks';
export const clusterConnectConnectorConfigRelativePath = 'config';

export const clusterConnectsPath = (
  clusterName: ClusterName = RouteParams.clusterName
) => `${clusterPath(clusterName)}/connects`;
export const clusterConnectorsPath = (
  clusterName: ClusterName = RouteParams.clusterName
) => `${clusterPath(clusterName)}/connectors`;
export const clusterConnectorNewPath = (
  clusterName: ClusterName = RouteParams.clusterName
) => `${clusterConnectorsPath(clusterName)}/create-new`;
export const clusterConnectConnectorsPath = (
  clusterName: ClusterName = RouteParams.clusterName,
  connectName: ConnectName = RouteParams.connectName
) => `${clusterConnectsPath(clusterName)}/${connectName}/connectors`;
export const clusterConnectConnectorPath = (
  clusterName: ClusterName = RouteParams.clusterName,
  connectName: ConnectName = RouteParams.connectName,
  connectorName: ConnectorName = RouteParams.connectorName
) =>
  `${clusterConnectConnectorsPath(clusterName, connectName)}/${connectorName}`;
export const clusterConnectConnectorEditPath = (
  clusterName: ClusterName = RouteParams.clusterName,
  connectName: ConnectName = RouteParams.connectName,
  connectorName: ConnectorName = RouteParams.connectorName
) =>
  `${clusterConnectConnectorsPath(
    clusterName,
    connectName
  )}/${connectorName}/edit`;
export const clusterConnectConnectorTasksPath = (
  clusterName: ClusterName = RouteParams.clusterName,
  connectName: ConnectName = RouteParams.connectName,
  connectorName: ConnectorName = RouteParams.connectorName
) =>
  `${clusterConnectConnectorPath(
    clusterName,
    connectName,
    connectorName
  )}/${clusterConnectConnectorTasksRelativePath}`;
export const clusterConnectConnectorConfigPath = (
  clusterName: ClusterName = RouteParams.clusterName,
  connectName: ConnectName = RouteParams.connectName,
  connectorName: ConnectorName = RouteParams.connectorName
) =>
  `${clusterConnectConnectorPath(
    clusterName,
    connectName,
    connectorName
  )}/${clusterConnectConnectorConfigRelativePath}`;
export type RouterParamsClusterConnectConnector = {
  clusterName: ClusterName;
  connectName: ConnectName;
  connectorName: ConnectorName;
};

// KsqlDb
export const clusterKsqlDbRelativePath = 'ksqldb';
export const clusterKsqlDbQueryRelativePath = 'query';
export const clusterKsqlDbPath = (
  clusterName: ClusterName = RouteParams.clusterName
) => `${clusterPath(clusterName)}/${clusterKsqlDbRelativePath}`;
export const clusterKsqlDbQueryPath = (
  clusterName: ClusterName = RouteParams.clusterName
) => `${clusterKsqlDbPath(clusterName)}/${clusterKsqlDbQueryRelativePath}`;
