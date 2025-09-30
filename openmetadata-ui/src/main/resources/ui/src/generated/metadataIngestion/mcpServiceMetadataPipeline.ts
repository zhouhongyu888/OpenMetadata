/*
 *  Copyright 2025 Collate.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *  http://www.apache.org/licenses/LICENSE-2.0
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
/**
 * MCP Service Metadata Pipeline Configuration.
 */
export interface MCPServiceMetadataPipeline {
    /**
     * Optional configuration to soft delete MCP servers in OpenMetadata if the source servers
     * are deleted. Also, if the server is deleted, all the associated entities like tools,
     * resources, prompts, etc., with that server will be deleted
     */
    markDeletedMcpServers?: boolean;
    /**
     * Set the 'Override Metadata' toggle to control whether to override the existing metadata
     * in the OpenMetadata server with the metadata fetched from the source. If the toggle is
     * set to true, the metadata fetched from the source will override the existing metadata in
     * the OpenMetadata server. If the toggle is set to false, the metadata fetched from the
     * source will not override the existing metadata in the OpenMetadata server. This is
     * applicable for fields like description, tags, owner and displayName
     */
    overrideMetadata?: boolean;
    /**
     * Regex to only fetch tools with names matching the pattern.
     */
    toolFilterPattern?: FilterPattern;
    /**
     * Pipeline type
     */
    type?: MCPMetadataConfigType;
}

/**
 * Regex to only fetch tools with names matching the pattern.
 *
 * Regex to only fetch entities that matches the pattern.
 */
export interface FilterPattern {
    /**
     * List of strings/regex patterns to match and exclude only database entities that match.
     */
    excludes?: string[];
    /**
     * List of strings/regex patterns to match and include only database entities that match.
     */
    includes?: string[];
}

/**
 * Pipeline type
 *
 * MCP Source Config Metadata Pipeline type
 */
export enum MCPMetadataConfigType {
    MCPMetadata = "McpMetadata",
}
