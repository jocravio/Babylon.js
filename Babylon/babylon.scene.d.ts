﻿declare module BABYLON {
    interface IDisposable {
        dispose(): void;
    }
    class Scene {
        static FOGMODE_NONE: number;
        static FOGMODE_EXP: number;
        static FOGMODE_EXP2: number;
        static FOGMODE_LINEAR: number;
        static MinDeltaTime: number;
        static MaxDeltaTime: number;
        public autoClear: boolean;
        public clearColor: any;
        public ambientColor: Color3;
        public beforeRender: () => void;
        public afterRender: () => void;
        public onDispose: () => void;
        public beforeCameraRender: (camera: Camera) => void;
        public afterCameraRender: (camera: Camera) => void;
        public forceWireframe: boolean;
        public forcePointsCloud: boolean;
        public forceShowBoundingBoxes: boolean;
        public clipPlane: Plane;
        public animationsEnabled: boolean;
        private _onPointerMove;
        private _onPointerDown;
        public onPointerDown: (evt: PointerEvent, pickInfo: PickingInfo) => void;
        public cameraToUseForPointers: Camera;
        private _pointerX;
        private _pointerY;
        private _meshUnderPointer;
        private _onKeyDown;
        private _onKeyUp;
        public fogEnabled: boolean;
        public fogMode: number;
        public fogColor: Color3;
        public fogDensity: number;
        public fogStart: number;
        public fogEnd: number;
        public shadowsEnabled: boolean;
        public lightsEnabled: boolean;
        public lights: Light[];
        public cameras: Camera[];
        public activeCameras: Camera[];
        public activeCamera: Camera;
        public meshes: AbstractMesh[];
        private _geometries;
        public materials: Material[];
        public multiMaterials: MultiMaterial[];
        public defaultMaterial: StandardMaterial;
        public texturesEnabled: boolean;
        public textures: BaseTexture[];
        public particlesEnabled: boolean;
        public particleSystems: ParticleSystem[];
        public spriteManagers: SpriteManager[];
        public layers: Layer[];
        public skeletonsEnabled: boolean;
        public skeletons: Skeleton[];
        public lensFlaresEnabled: boolean;
        public lensFlareSystems: LensFlareSystem[];
        public collisionsEnabled: boolean;
        public gravity: Vector3;
        public postProcessesEnabled: boolean;
        public postProcessManager: PostProcessManager;
        public postProcessRenderPipelineManager: PostProcessRenderPipelineManager;
        public renderTargetsEnabled: boolean;
        public customRenderTargets: RenderTargetTexture[];
        public useDelayedTextureLoading: boolean;
        public importedMeshesFiles: String[];
        public database: any;
        public actionManager: ActionManager;
        public _actionManagers: ActionManager[];
        private _meshesForIntersections;
        public proceduralTexturesEnabled: boolean;
        public _proceduralTextures: ProceduralTexture[];
        public mainSoundTrack: SoundTrack;
        public soundTracks: SoundTrack[];
        private _engine;
        private _totalVertices;
        public _activeVertices: number;
        public _activeParticles: number;
        private _lastFrameDuration;
        private _evaluateActiveMeshesDuration;
        private _renderTargetsDuration;
        public _particlesDuration: number;
        private _renderDuration;
        public _spritesDuration: number;
        private _animationRatio;
        private _animationStartDate;
        public _cachedMaterial: Material;
        private _renderId;
        private _executeWhenReadyTimeoutId;
        public _toBeDisposed: SmartArray<IDisposable>;
        private _onReadyCallbacks;
        private _pendingData;
        private _onBeforeRenderCallbacks;
        private _onAfterRenderCallbacks;
        private _activeMeshes;
        private _processedMaterials;
        private _renderTargets;
        public _activeParticleSystems: SmartArray<ParticleSystem>;
        private _activeSkeletons;
        private _activeBones;
        private _renderingManager;
        private _physicsEngine;
        public _activeAnimatables: Animatable[];
        private _transformMatrix;
        private _pickWithRayInverseMatrix;
        private _scaledPosition;
        private _scaledVelocity;
        private _boundingBoxRenderer;
        private _outlineRenderer;
        private _viewMatrix;
        private _projectionMatrix;
        private _frustumPlanes;
        private _selectionOctree;
        private _pointerOverMesh;
        private _debugLayer;
        constructor(engine: Engine);
        public debugLayer : DebugLayer;
        public meshUnderPointer : AbstractMesh;
        public pointerX : number;
        public pointerY : number;
        public getCachedMaterial(): Material;
        public getBoundingBoxRenderer(): BoundingBoxRenderer;
        public getOutlineRenderer(): OutlineRenderer;
        public getEngine(): Engine;
        public getTotalVertices(): number;
        public getActiveVertices(): number;
        public getActiveParticles(): number;
        public getActiveBones(): number;
        public getLastFrameDuration(): number;
        public getEvaluateActiveMeshesDuration(): number;
        public getActiveMeshes(): SmartArray<Mesh>;
        public getRenderTargetsDuration(): number;
        public getRenderDuration(): number;
        public getParticlesDuration(): number;
        public getSpritesDuration(): number;
        public getAnimationRatio(): number;
        public getRenderId(): number;
        private _updatePointerPosition(evt);
        public attachControl(): void;
        public detachControl(): void;
        public isReady(): boolean;
        public resetCachedMaterial(): void;
        public registerBeforeRender(func: () => void): void;
        public unregisterBeforeRender(func: () => void): void;
        public registerAfterRender(func: () => void): void;
        public unregisterAfterRender(func: () => void): void;
        public _addPendingData(data: any): void;
        public _removePendingData(data: any): void;
        public getWaitingItemsCount(): number;
        public executeWhenReady(func: () => void): void;
        public _checkIsReady(): void;
        public beginAnimation(target: any, from: number, to: number, loop?: boolean, speedRatio?: number, onAnimationEnd?: () => void, animatable?: Animatable): Animatable;
        public beginDirectAnimation(target: any, animations: Animation[], from: number, to: number, loop?: boolean, speedRatio?: number, onAnimationEnd?: () => void): Animatable;
        public getAnimatableByTarget(target: any): Animatable;
        public stopAnimation(target: any): void;
        private _animate();
        public getViewMatrix(): Matrix;
        public getProjectionMatrix(): Matrix;
        public getTransformMatrix(): Matrix;
        public setTransformMatrix(view: Matrix, projection: Matrix): void;
        public setActiveCameraByID(id: string): Camera;
        public setActiveCameraByName(name: string): Camera;
        public getMaterialByID(id: string): Material;
        public getMaterialByName(name: string): Material;
        public getCameraByID(id: string): Camera;
        public getCameraByName(name: string): Camera;
        public getLightByName(name: string): Light;
        public getLightByID(id: string): Light;
        public getGeometryByID(id: string): Geometry;
        public pushGeometry(geometry: Geometry, force?: boolean): boolean;
        public getGeometries(): Geometry[];
        public getMeshByID(id: string): AbstractMesh;
        public getLastMeshByID(id: string): AbstractMesh;
        public getLastEntryByID(id: string): Node;
        public getMeshByName(name: string): AbstractMesh;
        public getLastSkeletonByID(id: string): Skeleton;
        public getSkeletonById(id: string): Skeleton;
        public getSkeletonByName(name: string): Skeleton;
        public isActiveMesh(mesh: Mesh): boolean;
        private _evaluateSubMesh(subMesh, mesh);
        private _evaluateActiveMeshes();
        private _activeMesh(mesh);
        public updateTransformMatrix(force?: boolean): void;
        private _renderForCamera(camera);
        private _processSubCameras(camera);
        private _checkIntersections();
        public render(): void;
        private _updateAudioParameters();
        public dispose(): void;
        public _getNewPosition(position: Vector3, velocity: Vector3, collider: Collider, maximumRetry: number, finalPosition: Vector3, excludedMesh?: AbstractMesh): void;
        private _collideWithWorld(position, velocity, collider, maximumRetry, finalPosition, excludedMesh?);
        public createOrUpdateSelectionOctree(maxCapacity?: number, maxDepth?: number): Octree<AbstractMesh>;
        public createPickingRay(x: number, y: number, world: Matrix, camera: Camera): Ray;
        private _internalPick(rayFunction, predicate, fastCheck?);
        public pick(x: number, y: number, predicate?: (mesh: AbstractMesh) => boolean, fastCheck?: boolean, camera?: Camera): PickingInfo;
        public pickWithRay(ray: Ray, predicate: (mesh: Mesh) => boolean, fastCheck?: boolean): PickingInfo;
        public setPointerOverMesh(mesh: AbstractMesh): void;
        public getPointerOverMesh(): AbstractMesh;
        public getPhysicsEngine(): PhysicsEngine;
        public enablePhysics(gravity: Vector3, plugin?: IPhysicsEnginePlugin): boolean;
        public disablePhysicsEngine(): void;
        public isPhysicsEnabled(): boolean;
        public setGravity(gravity: Vector3): void;
        public createCompoundImpostor(parts: any, options: PhysicsBodyCreationOptions): any;
        public deleteCompoundImpostor(compound: any): void;
        private _getByTags(list, tagsQuery);
        public getMeshesByTags(tagsQuery: string): Mesh[];
        public getCamerasByTags(tagsQuery: string): Camera[];
        public getLightsByTags(tagsQuery: string): Light[];
        public getMaterialByTags(tagsQuery: string): Material[];
    }
}
