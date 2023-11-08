import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace Fonlow_PoemsApp_WebApi_Models_Client {
	export interface EntitySearchModel {
		dateBegin?: Date | null;
		dateEnd?: Date | null;
		keyword?: string | null;
	}
	export interface EntitySearchModelFormProperties {
		dateBegin: FormControl<Date | null | undefined>,
		dateEnd: FormControl<Date | null | undefined>,
		keyword: FormControl<string | null | undefined>,
	}
	export function CreateEntitySearchModelFormGroup() {
		return new FormGroup<EntitySearchModelFormProperties>({
			dateBegin: new FormControl<Date | null | undefined>(undefined),
			dateEnd: new FormControl<Date | null | undefined>(undefined),
			keyword: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserItem {
		description?: string | null;
		id: string;
		name?: string | null;
	}
	export interface UserItemFormProperties {
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateUserItemFormGroup() {
		return new FormGroup<UserItemFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserItemEx extends Fonlow_PoemsApp_WebApi_Models_Client.UserItem {
		email?: string | null;
	}
	export interface UserItemExFormProperties extends Fonlow_PoemsApp_WebApi_Models_Client.UserItemFormProperties {
		email: FormControl<string | null | undefined>,
	}
	export function CreateUserItemExFormGroup() {
		return new FormGroup<UserItemExFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserSearchModel extends Fonlow_PoemsApp_WebApi_Models_Client.EntitySearchModel {
		roleNames?: string | null;
	}
	export interface UserSearchModelFormProperties extends Fonlow_PoemsApp_WebApi_Models_Client.EntitySearchModelFormProperties {
		roleNames: FormControl<string | null | undefined>,
	}
	export function CreateUserSearchModelFormGroup() {
		return new FormGroup<UserSearchModelFormProperties>({
			dateBegin: new FormControl<Date | null | undefined>(undefined),
			dateEnd: new FormControl<Date | null | undefined>(undefined),
			keyword: new FormControl<string | null | undefined>(undefined),
			roleNames: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserUpdate {
		email?: string | null;
		fullName?: string | null;
		id: string;
		userName?: string | null;
	}
	export interface UserUpdateFormProperties {
		email: FormControl<string | null | undefined>,
		fullName: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		userName: FormControl<string | null | undefined>,
	}
	export function CreateUserUpdateFormGroup() {
		return new FormGroup<UserUpdateFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			fullName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}

}

export namespace Fonlow_PoemsApp_Data_Client {
	export interface Album {
		bodyType?: Fonlow_PoemsApp_Data_Client.BodyType | null;
		description?: string | null;
		id?: string | null;

		/**
		 * Author should be able to alter. The default is the created time. DateTime.
		 */
		published?: Date | null;

		/**
		 * First published Url
		 */
		publishedUrl?: string | null;

		/**
		 * Album title should never be changed.
		 */
		title?: string | null;
	}
	export interface AlbumFormProperties {
		bodyType: FormControl<Fonlow_PoemsApp_Data_Client.BodyType | null | undefined>,
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,

		/**
		 * Author should be able to alter. The default is the created time. DateTime.
		 */
		published: FormControl<Date | null | undefined>,

		/**
		 * First published Url
		 */
		publishedUrl: FormControl<string | null | undefined>,

		/**
		 * Album title should never be changed.
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreateAlbumFormGroup() {
		return new FormGroup<AlbumFormProperties>({
			bodyType: new FormControl<Fonlow_PoemsApp_Data_Client.BodyType | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			published: new FormControl<Date | null | undefined>(undefined),
			publishedUrl: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Annotation {

		/**
		 * HTML description
		 */
		description?: string | null;
		id?: string | null;

		/**  */
		name?: string | null;

		/**
		 * Primary URL for online description like an entry in Wikipedia
		 */
		url?: string | null;
	}
	export interface AnnotationFormProperties {

		/**
		 * HTML description
		 */
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,

		/**  */
		name: FormControl<string | null | undefined>,

		/**
		 * Primary URL for online description like an entry in Wikipedia
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateAnnotationFormGroup() {
		return new FormGroup<AnnotationFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AnnotationBrief {

		/**
		 * Count of poems associated
		 */
		count?: number | null;
		id: string;
		name: string;
	}
	export interface AnnotationBriefFormProperties {

		/**
		 * Count of poems associated
		 */
		count: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateAnnotationBriefFormGroup() {
		return new FormGroup<AnnotationBriefFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AnnotationPoemCount extends Fonlow_PoemsApp_Data_Client.MetaDataPoemCount {
	}
	export interface AnnotationPoemCountFormProperties extends Fonlow_PoemsApp_Data_Client.MetaDataPoemCountFormProperties {
	}
	export function CreateAnnotationPoemCountFormGroup() {
		return new FormGroup<AnnotationPoemCountFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BodyType { Text, HTML, MD }

	export interface ExternalImageMap {
		description?: string | null;
		name?: string | null;
		poemIds?: Array<string> | null;
		srcUrl?: string | null;
	}
	export interface ExternalImageMapFormProperties {
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		srcUrl: FormControl<string | null | undefined>,
	}
	export function CreateExternalImageMapFormGroup() {
		return new FormGroup<ExternalImageMapFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			srcUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * For wrting or speaking.
	 * https://www.loc.gov/standards/iso639-2/php/code_list.php
	 * https://www.rfc-editor.org/rfc/rfc5646
	 * https://iso639-3.sil.org/code_tables/639/read
	 * https://iso639-3.sil.org/code_tables/download_tables
	 */
	export interface LanguageCode {

		/**
		 * iso639 code. Could be 639-3, 639-2 or 639-1
		 */
		code?: string | null;
		display?: string | null;
	}

	/**
	 * For wrting or speaking.
	 * https://www.loc.gov/standards/iso639-2/php/code_list.php
	 * https://www.rfc-editor.org/rfc/rfc5646
	 * https://iso639-3.sil.org/code_tables/639/read
	 * https://iso639-3.sil.org/code_tables/download_tables
	 */
	export interface LanguageCodeFormProperties {

		/**
		 * iso639 code. Could be 639-3, 639-2 or 639-1
		 */
		code: FormControl<string | null | undefined>,
		display: FormControl<string | null | undefined>,
	}
	export function CreateLanguageCodeFormGroup() {
		return new FormGroup<LanguageCodeFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			display: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LoginModel {
		emailAddress?: string | null;
		firstName?: string | null;
		idToken?: string | null;
		lastName?: string | null;
		name?: string | null;
		pictureUrl?: string | null;
		provider?: string | null;
		userId?: string | null;
	}
	export interface LoginModelFormProperties {
		emailAddress: FormControl<string | null | undefined>,
		firstName: FormControl<string | null | undefined>,
		idToken: FormControl<string | null | undefined>,
		lastName: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		pictureUrl: FormControl<string | null | undefined>,
		provider: FormControl<string | null | undefined>,
		userId: FormControl<string | null | undefined>,
	}
	export function CreateLoginModelFormGroup() {
		return new FormGroup<LoginModelFormProperties>({
			emailAddress: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			idToken: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			pictureUrl: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MetaData {
		key?: string | null;
		value?: string | null;
	}
	export interface MetaDataFormProperties {
		key: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateMetaDataFormGroup() {
		return new FormGroup<MetaDataFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MetaDataPoemCount {

		/**
		 * Count of poems associated
		 */
		count?: number | null;
		id: string;
	}
	export interface MetaDataPoemCountFormProperties {

		/**
		 * Count of poems associated
		 */
		count: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
	}
	export function CreateMetaDataPoemCountFormGroup() {
		return new FormGroup<MetaDataPoemCountFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Associated with a specific poem only.
	 * In case when a phase may be up to different interpretations, then used numbered annotation.
	 */
	export interface NumberedAnnotation {

		/**
		 * HTML description
		 */
		description?: string | null;
		id?: string | null;
		orderNumber: number;

		/**  */
		poemId: string;

		/**
		 * Primary URL for online description like an entry in Wikipedia
		 */
		url?: string | null;
	}

	/**
	 * Associated with a specific poem only.
	 * In case when a phase may be up to different interpretations, then used numbered annotation.
	 */
	export interface NumberedAnnotationFormProperties {

		/**
		 * HTML description
		 */
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		orderNumber: FormControl<number | null | undefined>,

		/**  */
		poemId: FormControl<string | null | undefined>,

		/**
		 * Primary URL for online description like an entry in Wikipedia
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateNumberedAnnotationFormGroup() {
		return new FormGroup<NumberedAnnotationFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			orderNumber: new FormControl<number | null | undefined>(undefined, [Validators.max(2147483647), Validators.min(1)]),
			poemId: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NumberedAnnotationBrief {
		id: string;
		orderNumber: number;
	}
	export interface NumberedAnnotationBriefFormProperties {
		id: FormControl<string | null | undefined>,
		orderNumber: FormControl<number | null | undefined>,
	}
	export function CreateNumberedAnnotationBriefFormGroup() {
		return new FormGroup<NumberedAnnotationBriefFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			orderNumber: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Picture extends Fonlow_PoemsApp_Data_Client.PictureMeta {
		content?: Array<number> | null;
	}
	export interface PictureFormProperties extends Fonlow_PoemsApp_Data_Client.PictureMetaFormProperties {
	}
	export function CreatePictureFormGroup() {
		return new FormGroup<PictureFormProperties>({
			contentType: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512)]),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128)]),
		});

	}

	export interface PictureMeta {
		contentType?: string | null;
		description?: string | null;
		id?: string | null;
		name?: string | null;
	}
	export interface PictureMetaFormProperties {
		contentType: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreatePictureMetaFormGroup() {
		return new FormGroup<PictureMetaFormProperties>({
			contentType: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512)]),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128)]),
		});

	}

	export interface PicturePoemCount extends Fonlow_PoemsApp_Data_Client.MetaDataPoemCount {
		poemIds?: Array<string> | null;
	}
	export interface PicturePoemCountFormProperties extends Fonlow_PoemsApp_Data_Client.MetaDataPoemCountFormProperties {
	}
	export function CreatePicturePoemCountFormGroup() {
		return new FormGroup<PicturePoemCountFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Poem {

		/**
		 * A poem may be included in multipe albums.
		 * UI may use this to present albums
		 */
		albumIds?: Array<string> | null;
		annotationIds?: Array<string> | null;
		body?: string | null;

		/**
		 * When bodytype is HTML, a redundant copy for full text search. A poor man solution.
		 */
		bodyPlain?: string | null;
		bodyType?: Fonlow_PoemsApp_Data_Client.BodyType | null;

		/**
		 * Author should be able to alter. The default is the created time.
		 */
		created?: Date | null;
		id?: string | null;
		modified?: Date | null;
		numberedAnnotationBriefs?: Array<Fonlow_PoemsApp_Data_Client.NumberedAnnotationBrief> | null;
		numberOfStanza?: number | null;
		pictureIds?: Array<string> | null;

		/**
		 * to distinguish draft or published. DateTime.
		 */
		published?: Date | null;

		/**
		 * Initial published URL.
		 */
		publishedUrl?: string | null;
		ryhmesCsv?: string | null;

		/**
		 * UI use this to represent tags. This is not included n DB.
		 */
		tagIds?: Array<string> | null;
		title?: string | null;
	}
	export interface PoemFormProperties {

		/**
		 * A poem may be included in multipe albums.
		 * UI may use this to present albums
		 */
		body: FormControl<string | null | undefined>,

		/**
		 * When bodytype is HTML, a redundant copy for full text search. A poor man solution.
		 */
		bodyPlain: FormControl<string | null | undefined>,
		bodyType: FormControl<Fonlow_PoemsApp_Data_Client.BodyType | null | undefined>,

		/**
		 * Author should be able to alter. The default is the created time.
		 */
		created: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,
		modified: FormControl<Date | null | undefined>,
		numberOfStanza: FormControl<number | null | undefined>,

		/**
		 * to distinguish draft or published. DateTime.
		 */
		published: FormControl<Date | null | undefined>,

		/**
		 * Initial published URL.
		 */
		publishedUrl: FormControl<string | null | undefined>,
		ryhmesCsv: FormControl<string | null | undefined>,

		/**
		 * UI use this to represent tags. This is not included n DB.
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreatePoemFormGroup() {
		return new FormGroup<PoemFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
			bodyPlain: new FormControl<string | null | undefined>(undefined),
			bodyType: new FormControl<Fonlow_PoemsApp_Data_Client.BodyType | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			modified: new FormControl<Date | null | undefined>(undefined),
			numberOfStanza: new FormControl<number | null | undefined>(undefined),
			published: new FormControl<Date | null | undefined>(undefined),
			publishedUrl: new FormControl<string | null | undefined>(undefined),
			ryhmesCsv: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PoemAlbumMap {
		albumId?: string | null;
		poemId?: string | null;
	}
	export interface PoemAlbumMapFormProperties {
		albumId: FormControl<string | null | undefined>,
		poemId: FormControl<string | null | undefined>,
	}
	export function CreatePoemAlbumMapFormGroup() {
		return new FormGroup<PoemAlbumMapFormProperties>({
			albumId: new FormControl<string | null | undefined>(undefined),
			poemId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PoemAnnotationMap {
		annotationId?: string | null;
		poemId?: string | null;
	}
	export interface PoemAnnotationMapFormProperties {
		annotationId: FormControl<string | null | undefined>,
		poemId: FormControl<string | null | undefined>,
	}
	export function CreatePoemAnnotationMapFormGroup() {
		return new FormGroup<PoemAnnotationMapFormProperties>({
			annotationId: new FormControl<string | null | undefined>(undefined),
			poemId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PoemBrief {
		date: Date;
		id: string;
		published?: Date | null;
		tagIds?: Array<string> | null;
		title: string;
	}
	export interface PoemBriefFormProperties {
		date: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,
		published: FormControl<Date | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreatePoemBriefFormGroup() {
		return new FormGroup<PoemBriefFormProperties>({
			date: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			published: new FormControl<Date | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Highest level container for every poems written by a poet, for exporting to other formats
	 */
	export interface PoemCollection {
		albumMaps: Array<Fonlow_PoemsApp_Data_Client.PoemAlbumMap>;
		albums: Array<Fonlow_PoemsApp_Data_Client.Album>;
		annotationMaps: Array<Fonlow_PoemsApp_Data_Client.PoemAnnotationMap>;
		annotations: Array<Fonlow_PoemsApp_Data_Client.Annotation>;
		keyValues: Array<Fonlow_PoemsApp_Data_Client.MetaData>;
		numberedAnnotations: Array<Fonlow_PoemsApp_Data_Client.NumberedAnnotation>;
		pictureMaps?: Array<Fonlow_PoemsApp_Data_Client.PoemPictureMap> | null;
		pictureMetas?: Array<Fonlow_PoemsApp_Data_Client.PictureMeta> | null;
		poems: Array<Fonlow_PoemsApp_Data_Client.Poem>;
		tagMaps: Array<Fonlow_PoemsApp_Data_Client.PoemTagMap>;
		tags: Array<Fonlow_PoemsApp_Data_Client.Tag>;
	}

	/**
	 * Highest level container for every poems written by a poet, for exporting to other formats
	 */
	export interface PoemCollectionFormProperties {
	}
	export function CreatePoemCollectionFormGroup() {
		return new FormGroup<PoemCollectionFormProperties>({
		});

	}

	export interface PoemPictureMap {
		pictureId?: string | null;
		poemId?: string | null;
	}
	export interface PoemPictureMapFormProperties {
		pictureId: FormControl<string | null | undefined>,
		poemId: FormControl<string | null | undefined>,
	}
	export function CreatePoemPictureMapFormGroup() {
		return new FormGroup<PoemPictureMapFormProperties>({
			pictureId: new FormControl<string | null | undefined>(undefined),
			poemId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PoemTagMap {
		poemId?: string | null;
		tagId?: string | null;
	}
	export interface PoemTagMapFormProperties {
		poemId: FormControl<string | null | undefined>,
		tagId: FormControl<string | null | undefined>,
	}
	export function CreatePoemTagMapFormGroup() {
		return new FormGroup<PoemTagMapFormProperties>({
			poemId: new FormControl<string | null | undefined>(undefined),
			tagId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Tag {
		id?: string | null;
		name?: string | null;
	}
	export interface TagFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagPoemCount extends Fonlow_PoemsApp_Data_Client.MetaDataPoemCount {
	}
	export interface TagPoemCountFormProperties extends Fonlow_PoemsApp_Data_Client.MetaDataPoemCountFormProperties {
	}
	export function CreateTagPoemCountFormGroup() {
		return new FormGroup<TagPoemCountFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

}

export namespace Fonlow_PoemsApp_Services_Client {
	export interface CustomToken {
		connectionId?: string | null;
		stamp?: Date | null;
		tokenValue?: string | null;
	}
	export interface CustomTokenFormProperties {
		connectionId: FormControl<string | null | undefined>,
		stamp: FormControl<Date | null | undefined>,
		tokenValue: FormControl<string | null | undefined>,
	}
	export function CreateCustomTokenFormGroup() {
		return new FormGroup<CustomTokenFormProperties>({
			connectionId: new FormControl<string | null | undefined>(undefined),
			stamp: new FormControl<Date | null | undefined>(undefined),
			tokenValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * https://www.ietf.org/rfc/rfc6749.txt
	 */
	export interface TokenResponseModel {
		access_token: string;
		api_key?: Fonlow_PoemsApp_WebApi_Models_Client.ApiKey | null;
		connection_id?: string | null;
		expires: string;
		expires_in: number;
		refresh_token?: string | null;
		token_type: string;
		username: string;
	}

	/**
	 * https://www.ietf.org/rfc/rfc6749.txt
	 */
	export interface TokenResponseModelFormProperties {
		access_token: FormControl<string | null | undefined>,
		connection_id: FormControl<string | null | undefined>,
		expires: FormControl<string | null | undefined>,
		expires_in: FormControl<number | null | undefined>,
		refresh_token: FormControl<string | null | undefined>,
		token_type: FormControl<string | null | undefined>,
		username: FormControl<string | null | undefined>,
	}
	export function CreateTokenResponseModelFormGroup() {
		return new FormGroup<TokenResponseModelFormProperties>({
			access_token: new FormControl<string | null | undefined>(undefined),
			connection_id: new FormControl<string | null | undefined>(undefined),
			expires: new FormControl<string | null | undefined>(undefined),
			expires_in: new FormControl<number | null | undefined>(undefined),
			refresh_token: new FormControl<string | null | undefined>(undefined),
			token_type: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UsernameModel {
		password?: string | null;
		username?: string | null;
	}
	export interface UsernameModelFormProperties {
		password: FormControl<string | null | undefined>,
		username: FormControl<string | null | undefined>,
	}
	export function CreateUsernameModelFormGroup() {
		return new FormGroup<UsernameModelFormProperties>({
			password: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

}

export namespace Fonlow_PoemsApp_WebApi_Models_Client {
	export interface AddExternalLoginBindingModel {
		externalAccessToken?: string | null;
	}
	export interface AddExternalLoginBindingModelFormProperties {
		externalAccessToken: FormControl<string | null | undefined>,
	}
	export function CreateAddExternalLoginBindingModelFormGroup() {
		return new FormGroup<AddExternalLoginBindingModelFormProperties>({
			externalAccessToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ApiKey {

		/**
		 * Tell the client about expiration
		 */
		expiryTime?: Date | null;
		key?: string | null;
	}
	export interface ApiKeyFormProperties {

		/**
		 * Tell the client about expiration
		 */
		expiryTime: FormControl<Date | null | undefined>,
		key: FormControl<string | null | undefined>,
	}
	export function CreateApiKeyFormGroup() {
		return new FormGroup<ApiKeyFormProperties>({
			expiryTime: new FormControl<Date | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ChangePasswordBindingModel {
		confirmPassword?: string | null;
		newPassword?: string | null;
		oldPassword?: string | null;
	}
	export interface ChangePasswordBindingModelFormProperties {
		confirmPassword: FormControl<string | null | undefined>,
		newPassword: FormControl<string | null | undefined>,
		oldPassword: FormControl<string | null | undefined>,
	}
	export function CreateChangePasswordBindingModelFormGroup() {
		return new FormGroup<ChangePasswordBindingModelFormProperties>({
			confirmPassword: new FormControl<string | null | undefined>(undefined),
			newPassword: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(100), Validators.minLength(6)]),
			oldPassword: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ExternalLoginViewModel {
		name?: string | null;
		state?: string | null;
		url?: string | null;
	}
	export interface ExternalLoginViewModelFormProperties {
		name: FormControl<string | null | undefined>,
		state: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateExternalLoginViewModelFormGroup() {
		return new FormGroup<ExternalLoginViewModelFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ManageInfoViewModel {
		email?: string | null;
		externalLoginProviders?: Array<Fonlow_PoemsApp_WebApi_Models_Client.ExternalLoginViewModel> | null;
		localLoginProvider?: string | null;
		logins?: Array<Fonlow_PoemsApp_WebApi_Models_Client.UserLoginInfoViewModel> | null;
	}
	export interface ManageInfoViewModelFormProperties {
		email: FormControl<string | null | undefined>,
		localLoginProvider: FormControl<string | null | undefined>,
	}
	export function CreateManageInfoViewModelFormGroup() {
		return new FormGroup<ManageInfoViewModelFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			localLoginProvider: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RegisterBindingModel {
		confirmPassword?: string | null;
		email?: string | null;
		fullName?: string | null;
		password?: string | null;
		userName?: string | null;
	}
	export interface RegisterBindingModelFormProperties {
		confirmPassword: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
		fullName: FormControl<string | null | undefined>,
		password: FormControl<string | null | undefined>,
		userName: FormControl<string | null | undefined>,
	}
	export function CreateRegisterBindingModelFormGroup() {
		return new FormGroup<RegisterBindingModelFormProperties>({
			confirmPassword: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			fullName: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(100), Validators.minLength(6)]),
			userName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RegisterExternalBindingModel {
		email?: string | null;
	}
	export interface RegisterExternalBindingModelFormProperties {
		email: FormControl<string | null | undefined>,
	}
	export function CreateRegisterExternalBindingModelFormGroup() {
		return new FormGroup<RegisterExternalBindingModelFormProperties>({
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RemoveLoginBindingModel {
		loginProvider?: string | null;
		providerKey?: string | null;
	}
	export interface RemoveLoginBindingModelFormProperties {
		loginProvider: FormControl<string | null | undefined>,
		providerKey: FormControl<string | null | undefined>,
	}
	export function CreateRemoveLoginBindingModelFormGroup() {
		return new FormGroup<RemoveLoginBindingModelFormProperties>({
			loginProvider: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			providerKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResetPasswordViewModel {
		code?: string | null;
		confirmPassword?: string | null;
		email?: string | null;
		password?: string | null;
	}
	export interface ResetPasswordViewModelFormProperties {
		code: FormControl<string | null | undefined>,
		confirmPassword: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
		password: FormControl<string | null | undefined>,
	}
	export function CreateResetPasswordViewModelFormGroup() {
		return new FormGroup<ResetPasswordViewModelFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			confirmPassword: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SetPasswordBindingModel {
		confirmPassword?: string | null;
		newPassword?: string | null;
	}
	export interface SetPasswordBindingModelFormProperties {
		confirmPassword: FormControl<string | null | undefined>,
		newPassword: FormControl<string | null | undefined>,
	}
	export function CreateSetPasswordBindingModelFormGroup() {
		return new FormGroup<SetPasswordBindingModelFormProperties>({
			confirmPassword: new FormControl<string | null | undefined>(undefined),
			newPassword: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(100), Validators.minLength(6)]),
		});

	}

	export interface SetUserPasswordBindingModel extends Fonlow_PoemsApp_WebApi_Models_Client.SetPasswordBindingModel {
		userId?: string | null;
	}
	export interface SetUserPasswordBindingModelFormProperties extends Fonlow_PoemsApp_WebApi_Models_Client.SetPasswordBindingModelFormProperties {
		userId: FormControl<string | null | undefined>,
	}
	export function CreateSetUserPasswordBindingModelFormGroup() {
		return new FormGroup<SetUserPasswordBindingModelFormProperties>({
			confirmPassword: new FormControl<string | null | undefined>(undefined),
			newPassword: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(100), Validators.minLength(6)]),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserInfoViewModel {
		createdUtc?: Date | null;
		email?: string | null;
		fullName?: string | null;
		hasRegistered?: boolean | null;
		id: string;
		loginProvider?: string | null;
		roles?: Array<string> | null;
		userName: string;
	}
	export interface UserInfoViewModelFormProperties {
		createdUtc: FormControl<Date | null | undefined>,
		email: FormControl<string | null | undefined>,
		fullName: FormControl<string | null | undefined>,
		hasRegistered: FormControl<boolean | null | undefined>,
		id: FormControl<string | null | undefined>,
		loginProvider: FormControl<string | null | undefined>,
		userName: FormControl<string | null | undefined>,
	}
	export function CreateUserInfoViewModelFormGroup() {
		return new FormGroup<UserInfoViewModelFormProperties>({
			createdUtc: new FormControl<Date | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			fullName: new FormControl<string | null | undefined>(undefined),
			hasRegistered: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			loginProvider: new FormControl<string | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserLoginInfoViewModel {
		loginProvider?: string | null;
		providerKey?: string | null;
	}
	export interface UserLoginInfoViewModelFormProperties {
		loginProvider: FormControl<string | null | undefined>,
		providerKey: FormControl<string | null | undefined>,
	}
	export function CreateUserLoginInfoViewModelFormGroup() {
		return new FormGroup<UserLoginInfoViewModelFormProperties>({
			loginProvider: new FormControl<string | null | undefined>(undefined),
			providerKey: new FormControl<string | null | undefined>(undefined),
		});

	}

}

export namespace PoemsApp_Controllers_Client {
	@Injectable()
	export class Account {
		constructor(@Inject('baseUri') private baseUri: string = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * POST api/Account/AddRole?userId={userId}&roleName={roleName}
		 */
		addRole(userId?: string | null, roleName?: string | null, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/Account/AddRole?userId=' + (!userId ? '' : encodeURIComponent(userId)) + '&roleName=' + (!roleName ? '' : encodeURIComponent(roleName)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * PUT api/Account/ChangePassword
		 */
		changePassword(model?: Fonlow_PoemsApp_WebApi_Models_Client.ChangePasswordBindingModel | null, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/Account/ChangePassword', JSON.stringify(model), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * POST api/Account/ForgotPassword
		 */
		forgotPassword(email?: string | null, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/Account/ForgotPassword', JSON.stringify(email), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * GET api/Account/AllRoleNames
		 */
		getAllRoleNames(headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'api/Account/AllRoleNames', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get array of user name and full name.
		 * GET api/Account/AllUsers
		 * @return {Array<{item1: string, item2: string}>} userName, fullName
		 */
		getAllUsers(headersHandler?: () => HttpHeaders): Observable<Array<{item1: string, item2: string}>> {
			return this.http.get<Array<{item1: string, item2: string}>>(this.baseUri + 'api/Account/AllUsers', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get array of user Id, full name, and user name as description
		 * GET api/Account/AllUsersEx
		 * @return {Array<Fonlow_PoemsApp_WebApi_Models_Client.UserItemEx>} Id, userName, fullName
		 */
		getAllUsersEx(headersHandler?: () => HttpHeaders): Observable<Array<Fonlow_PoemsApp_WebApi_Models_Client.UserItemEx>> {
			return this.http.get<Array<Fonlow_PoemsApp_WebApi_Models_Client.UserItemEx>>(this.baseUri + 'api/Account/AllUsersEx', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Array of Id, full name and email. Name is full name, and description is username.
		 * GET api/Account/AllWithFullname
		 */
		getAllUsersWithFullname(headersHandler?: () => HttpHeaders): Observable<Array<Fonlow_PoemsApp_WebApi_Models_Client.UserItemEx>> {
			return this.http.get<Array<Fonlow_PoemsApp_WebApi_Models_Client.UserItemEx>>(this.baseUri + 'api/Account/AllWithFullname', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/Account/Roles?userId={userId}
		 */
		getRoles(userId?: string | null, headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'api/Account/Roles?userId=' + (!userId ? '' : encodeURIComponent(userId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/Account/idByEmail?email={email}
		 */
		getUserIdByEmail(email?: string | null, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get<string>(this.baseUri + 'api/Account/idByEmail?email=' + (!email ? '' : encodeURIComponent(email)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/Account/idByFullName?cn={cn}
		 */
		getUserIdByFullName(cn?: string | null, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get<string>(this.baseUri + 'api/Account/idByFullName?cn=' + (!cn ? '' : encodeURIComponent(cn)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/Account/UserIdByUser?username={username}
		 */
		getUserIdByUser(username?: string | null, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get<string>(this.baseUri + 'api/Account/UserIdByUser?username=' + (!username ? '' : encodeURIComponent(username)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/Account/UserIdFullNameDic
		 */
		getUserIdFullNameDic(headersHandler?: () => HttpHeaders): Observable<{[id: string]: string }> {
			return this.http.get<{[id: string]: string }>(this.baseUri + 'api/Account/UserIdFullNameDic', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Mapping between email address and user Id
		 * GET api/Account/UserIdMapByEmail
		 * @return {Array<{key: string, value: string }>} Key is email address, and value is user Id.
		 */
		getUserIdMapByEmail(headersHandler?: () => HttpHeaders): Observable<Array<{key: string, value: string }>> {
			return this.http.get<Array<{key: string, value: string }>>(this.baseUri + 'api/Account/UserIdMapByEmail', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Mapping between full user name and user Id
		 * GET api/Account/UserIdMapByFullName
		 * @return {Array<{key: string, value: string }>} Key is full name, and value is user Id.
		 */
		getUserIdMapByFullName(headersHandler?: () => HttpHeaders): Observable<Array<{key: string, value: string }>> {
			return this.http.get<Array<{key: string, value: string }>>(this.baseUri + 'api/Account/UserIdMapByFullName', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/Account/UserIdNameDic
		 */
		getUserIdNameDic(headersHandler?: () => HttpHeaders): Observable<{[id: string]: string }> {
			return this.http.get<{[id: string]: string }>(this.baseUri + 'api/Account/UserIdNameDic', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/Account/UserInfo
		 */
		getUserInfo(headersHandler?: () => HttpHeaders): Observable<Fonlow_PoemsApp_WebApi_Models_Client.UserInfoViewModel> {
			return this.http.get<Fonlow_PoemsApp_WebApi_Models_Client.UserInfoViewModel>(this.baseUri + 'api/Account/UserInfo', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/Account/UserInfoById?id={id}
		 */
		getUserInfoById(id?: string | null, headersHandler?: () => HttpHeaders): Observable<Fonlow_PoemsApp_WebApi_Models_Client.UserInfoViewModel> {
			return this.http.get<Fonlow_PoemsApp_WebApi_Models_Client.UserInfoViewModel>(this.baseUri + 'api/Account/UserInfoById?id=' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * POST api/Account/Logout
		 */
		logout(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/Account/Logout', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * POST api/Account/Register
		 */
		register(model?: Fonlow_PoemsApp_WebApi_Models_Client.RegisterBindingModel | null, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.post<string>(this.baseUri + 'api/Account/Register', JSON.stringify(model), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * DELETE api/Account/RemoveRole?userId={userId}&roleName={roleName}
		 */
		removeRole(userId?: string | null, roleName?: string | null, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/Account/RemoveRole?userId=' + (!userId ? '' : encodeURIComponent(userId)) + '&roleName=' + (!roleName ? '' : encodeURIComponent(roleName)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * DELETE api/Account/RemoveUser?userId={userId}
		 */
		removeUser(userId?: string | null, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/Account/RemoveUser?userId=' + userId, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * POST api/Account/ResetPassword
		 */
		resetPassword(model?: Fonlow_PoemsApp_WebApi_Models_Client.ResetPasswordViewModel | null, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/Account/ResetPassword', JSON.stringify(model), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * POST api/Account/Search
		 */
		search(c?: Fonlow_PoemsApp_WebApi_Models_Client.UserSearchModel | null, headersHandler?: () => HttpHeaders): Observable<Array<Fonlow_PoemsApp_WebApi_Models_Client.UserItem>> {
			return this.http.post<Array<Fonlow_PoemsApp_WebApi_Models_Client.UserItem>>(this.baseUri + 'api/Account/Search', JSON.stringify(c), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * PUT api/Account/SetPassword
		 */
		setPassword(model?: Fonlow_PoemsApp_WebApi_Models_Client.SetPasswordBindingModel | null, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/Account/SetPassword', JSON.stringify(model), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * PUT api/Account/SetUserPassword
		 */
		setUserPassword(model?: Fonlow_PoemsApp_WebApi_Models_Client.SetUserPasswordBindingModel | null, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/Account/SetUserPassword', JSON.stringify(model), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * PUT api/Account/Update
		 */
		update(model?: Fonlow_PoemsApp_WebApi_Models_Client.UserUpdate | null, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/Account/Update', JSON.stringify(model), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}
	}

	@Injectable()
	export class Albums {
		constructor(@Inject('baseUri') private baseUri: string = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Add album. If publisheDate is not defined, it will be now.
		 * POST api/Albums
		 */
		add(album?: Fonlow_PoemsApp_Data_Client.Album | null, headersHandler?: () => HttpHeaders): Observable<Fonlow_PoemsApp_Data_Client.Album> {
			return this.http.post<Fonlow_PoemsApp_Data_Client.Album>(this.baseUri + 'api/Albums', JSON.stringify(album), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete along with what in poemAlbumMap.
		 * DELETE api/Albums?id={id}
		 */
		delete(id?: string | null, headersHandler?: () => HttpHeaders): Observable<boolean> {
			return this.http.delete<boolean>(this.baseUri + 'api/Albums?id=' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Album. Support ZH Convert.
		 * GET api/Albums?id={id}
		 */
		get(id?: string | null, headersHandler?: () => HttpHeaders): Observable<Fonlow_PoemsApp_Data_Client.Album | null> {
			return this.http.get<Fonlow_PoemsApp_Data_Client.Album | null>(this.baseUri + 'api/Albums?id=' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get all albums. Support ZH Convert.
		 * GET api/Albums/all
		 * @param {number} timezoneOffset int in header
		 */
		getAll(headersHandler?: () => HttpHeaders): Observable<Array<Fonlow_PoemsApp_Data_Client.Album>> {
			return this.http.get<Array<Fonlow_PoemsApp_Data_Client.Album>>(this.baseUri + 'api/Albums/all', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get all albums as dictionary. Support ZH Convert.
		 * GET api/Albums/allDic
		 * @param {number} timezoneOffset int in header
		 */
		getAllDic(headersHandler?: () => HttpHeaders): Observable<{[id: string]: Fonlow_PoemsApp_Data_Client.Album }> {
			return this.http.get<{[id: string]: Fonlow_PoemsApp_Data_Client.Album }>(this.baseUri + 'api/Albums/allDic', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * PUT api/Albums
		 */
		update(album?: Fonlow_PoemsApp_Data_Client.Album | null, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/Albums', JSON.stringify(album), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}
	}

	@Injectable()
	export class Annotations {
		constructor(@Inject('baseUri') private baseUri: string = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * POST api/Annotations
		 */
		add(annotation?: Fonlow_PoemsApp_Data_Client.Annotation | null, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.post<string>(this.baseUri + 'api/Annotations', JSON.stringify(annotation), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete along with what in poemAnnotationMap.
		 * DELETE api/Annotations?id={id}
		 */
		delete(id?: string | null, headersHandler?: () => HttpHeaders): Observable<boolean> {
			return this.http.delete<boolean>(this.baseUri + 'api/Annotations?id=' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * POST api/Annotations/Orphaned
		 */
		deleteOrphaned(ids?: Array<string> | null, headersHandler?: () => HttpHeaders): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/Annotations/Orphaned', JSON.stringify(ids), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get annotation. Support ZH Convert.
		 * GET api/Annotations?id={id}
		 */
		get(id?: string | null, headersHandler?: () => HttpHeaders): Observable<Fonlow_PoemsApp_Data_Client.Annotation | null> {
			return this.http.get<Fonlow_PoemsApp_Data_Client.Annotation | null>(this.baseUri + 'api/Annotations?id=' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/Annotations/all
		 */
		getAnnotationBriefs(headersHandler?: () => HttpHeaders): Observable<Array<Fonlow_PoemsApp_Data_Client.AnnotationBrief>> {
			return this.http.get<Array<Fonlow_PoemsApp_Data_Client.AnnotationBrief>>(this.baseUri + 'api/Annotations/all', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get all annotation briefs. Support ZH Convert.
		 * GET api/Annotations/allDic
		 */
		getAnnotationBriefsDic(headersHandler?: () => HttpHeaders): Observable<{[id: string]: Fonlow_PoemsApp_Data_Client.AnnotationBrief }> {
			return this.http.get<{[id: string]: Fonlow_PoemsApp_Data_Client.AnnotationBrief }>(this.baseUri + 'api/Annotations/allDic', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/Annotations/Orphaned
		 */
		getOrphaned(headersHandler?: () => HttpHeaders): Observable<Array<Fonlow_PoemsApp_Data_Client.AnnotationBrief>> {
			return this.http.get<Array<Fonlow_PoemsApp_Data_Client.AnnotationBrief>>(this.baseUri + 'api/Annotations/Orphaned', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/Annotations/PoemCountOfAnnotations
		 */
		getPoemCountOfAnnotations(headersHandler?: () => HttpHeaders): Observable<Array<Fonlow_PoemsApp_Data_Client.AnnotationPoemCount>> {
			return this.http.get<Array<Fonlow_PoemsApp_Data_Client.AnnotationPoemCount>>(this.baseUri + 'api/Annotations/PoemCountOfAnnotations', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * PUT api/Annotations
		 */
		update(annotation?: Fonlow_PoemsApp_Data_Client.Annotation | null, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/Annotations', JSON.stringify(annotation), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}
	}

	@Injectable()
	export class Files {
		constructor(@Inject('baseUri') private baseUri: string = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * POST api/Files/ImgsToPoem/{poemId}
		 */
		associatePoemWithFiles(poemId?: string | null, fileIds?: Array<string> | null, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/Files/ImgsToPoem/' + poemId, JSON.stringify(fileIds), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * DELETE api/Files?id={id}
		 */
		delete(id?: string | null, headersHandler?: () => HttpHeaders): Observable<boolean> {
			return this.http.delete<boolean>(this.baseUri + 'api/Files?id=' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * POST api/Files/Orphaned
		 */
		deleteOrphaned(ids?: Array<string> | null, headersHandler?: () => HttpHeaders): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/Files/Orphaned', JSON.stringify(ids), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * POST api/Files/ExternalToLocal
		 */
		downloadRemoteToLocal(externalImageMap?: Fonlow_PoemsApp_Data_Client.ExternalImageMap | null, headersHandler?: () => HttpHeaders): Observable<Fonlow_PoemsApp_Data_Client.PictureMeta> {
			return this.http.post<Fonlow_PoemsApp_Data_Client.PictureMeta>(this.baseUri + 'api/Files/ExternalToLocal', JSON.stringify(externalImageMap), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * All pictures including those orphaned. Picture returned has no blob content.
		 * GET api/Files/all
		 */
		getAllPictures(headersHandler?: () => HttpHeaders): Observable<Array<Fonlow_PoemsApp_Data_Client.PictureMeta>> {
			return this.http.get<Array<Fonlow_PoemsApp_Data_Client.PictureMeta>>(this.baseUri + 'api/Files/all', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Read file from DB table pictures. Read headers p-name and p-description as well.
		 * GET api/Files/file/{fileId}
		 */
		getFile(fileId?: string | null, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/Files/file/' + (!fileId ? '' : encodeURIComponent(fileId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * GET api/Files/Orphaned
		 */
		getOrphaned(headersHandler?: () => HttpHeaders): Observable<Array<Fonlow_PoemsApp_Data_Client.PictureMeta>> {
			return this.http.get<Array<Fonlow_PoemsApp_Data_Client.PictureMeta>>(this.baseUri + 'api/Files/Orphaned', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Picture returned has no blob.
		 * GET api/Files/allDic
		 */
		getPicturesDic(headersHandler?: () => HttpHeaders): Observable<{[id: string]: Fonlow_PoemsApp_Data_Client.PictureMeta }> {
			return this.http.get<{[id: string]: Fonlow_PoemsApp_Data_Client.PictureMeta }>(this.baseUri + 'api/Files/allDic', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/Files/PoemCountOfPictures
		 */
		getPoemCountOfPictures(headersHandler?: () => HttpHeaders): Observable<Array<Fonlow_PoemsApp_Data_Client.PicturePoemCount>> {
			return this.http.get<Array<Fonlow_PoemsApp_Data_Client.PicturePoemCount>>(this.baseUri + 'api/Files/PoemCountOfPictures', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * PUT api/Files/description?id={id}
		 */
		updateDescription(id?: string | null, description?: string | null, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/Files/description?id=' + id, JSON.stringify(description), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Update name and description
		 * PUT api/Files/meta?id={id}
		 */
		updateMeta(id?: string | null, meta?: {item1: string, item2: string} | null, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/Files/meta?id=' + id, JSON.stringify(meta), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * PUT api/Files/name?id={id}
		 */
		updateName(id?: string | null, name?: string | null, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/Files/name?id=' + id, JSON.stringify(name), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}
	}

	@Injectable()
	export class KeyValues {
		constructor(@Inject('baseUri') private baseUri: string = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Provide Tyro defined API key for Medilink. However, hacker could still see the key in the developer mode of the browser.
		 * GET api/settings?key={key}
		 */
		get(key?: string | null, headersHandler?: () => HttpHeaders): Observable<string | null> {
			return this.http.get(this.baseUri + 'api/settings?key=' + (!key ? '' : encodeURIComponent(key)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * GET api/settings/version
		 */
		getApiVersion(headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'api/settings/version', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * POST api/settings/keyvalues
		 */
		getValues(keys?: Array<string> | null, headersHandler?: () => HttpHeaders): Observable<{[id: string]: string }> {
			return this.http.post<{[id: string]: string }>(this.baseUri + 'api/settings/keyvalues', JSON.stringify(keys), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * GET api/settings/prefix?prefix={prefix}
		 */
		getValuesWithPrefix(prefix?: string | null, headersHandler?: () => HttpHeaders): Observable<{[id: string]: string }> {
			return this.http.get<{[id: string]: string }>(this.baseUri + 'api/settings/prefix?prefix=' + (!prefix ? '' : encodeURIComponent(prefix)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * DELETE api/settings?key={key}
		 */
		remove(key?: string | null, headersHandler?: () => HttpHeaders): Observable<boolean> {
			return this.http.delete<boolean>(this.baseUri + 'api/settings?key=' + (!key ? '' : encodeURIComponent(key)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * POST api/settings
		 */
		upsert(kv?: {key: string, value: string } | null, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/settings', JSON.stringify(kv), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * POST api/settings/key/{key}
		 */
		upsertKey(key?: string | null, value?: string | null, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/settings/key/' + (!key ? '' : encodeURIComponent(key)), JSON.stringify(value), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}
	}

	@Injectable()
	export class NumberedAnnotations {
		constructor(@Inject('baseUri') private baseUri: string = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * POST api/NumberedAnnotations
		 */
		add(numberedAnnotation?: Fonlow_PoemsApp_Data_Client.NumberedAnnotation | null, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.post<string>(this.baseUri + 'api/NumberedAnnotations', JSON.stringify(numberedAnnotation), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Add multiple annotations
		 * POST api/NumberedAnnotations/poem/{poemId}
		 */
		addMuitiple(poemId?: string | null, orderNumbers?: Array<number> | null, headersHandler?: () => HttpHeaders): Observable<Array<Fonlow_PoemsApp_Data_Client.NumberedAnnotation>> {
			return this.http.post<Array<Fonlow_PoemsApp_Data_Client.NumberedAnnotation>>(this.baseUri + 'api/NumberedAnnotations/poem/' + poemId, JSON.stringify(orderNumbers), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Update the orders of numbered annotations in a transaction
		 * PUT api/NumberedAnnotations/BulkOrderNumbers
		 */
		bulkUpdateOrderNumbers(idAndOrderArray?: Array<{item1: string, item2: number}> | null, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/NumberedAnnotations/BulkOrderNumbers', JSON.stringify(idAndOrderArray), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete along with what in poemNumberedAnnotationMap.
		 * DELETE api/NumberedAnnotations?id={id}
		 */
		delete(id?: string | null, headersHandler?: () => HttpHeaders): Observable<boolean> {
			return this.http.delete<boolean>(this.baseUri + 'api/NumberedAnnotations?id=' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get numberedAnnotation. Support ZH Convert.
		 * GET api/NumberedAnnotations?id={id}
		 */
		get(id?: string | null, headersHandler?: () => HttpHeaders): Observable<Fonlow_PoemsApp_Data_Client.NumberedAnnotation | null> {
			return this.http.get<Fonlow_PoemsApp_Data_Client.NumberedAnnotation | null>(this.baseUri + 'api/NumberedAnnotations?id=' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update annotation
		 * PUT api/NumberedAnnotations
		 */
		update(numberedAnnotation?: Fonlow_PoemsApp_Data_Client.NumberedAnnotation | null, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/NumberedAnnotations', JSON.stringify(numberedAnnotation), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Update Order Number
		 * PUT api/NumberedAnnotations/OrderNumber?id={id}&orderNumber={orderNumber}
		 */
		updateOrderNumber(id?: string | null, orderNumber?: number | null, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/NumberedAnnotations/OrderNumber?id=' + id + '&orderNumber=' + orderNumber, null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

	@Injectable()
	export class Poems {
		constructor(@Inject('baseUri') private baseUri: string = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Add poem. If created is undefined, it will be now. And modified is always now.
		 * POST api/Poems
		 * @return {Fonlow_PoemsApp_Data_Client.Poem} Id of newly added
		 */
		add(poem?: Fonlow_PoemsApp_Data_Client.Poem | null, headersHandler?: () => HttpHeaders): Observable<Fonlow_PoemsApp_Data_Client.Poem> {
			return this.http.post<Fonlow_PoemsApp_Data_Client.Poem>(this.baseUri + 'api/Poems', JSON.stringify(poem), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Add new poem with existing annotations and new annotation names.
		 * PUT api/Poems/AddWithExistingAnnotations
		 * @param {{item1: Fonlow_PoemsApp_Data_Client.Poem, item2: Array<string>}} poemAndAnnotations new poem, existing Annotation Ids, and new annotation names
		 * @return {Fonlow_PoemsApp_Data_Client.Poem} Poem Id and new annotation objects
		 */
		addWithExistingAnnotations(poemAndAnnotations?: {item1: Fonlow_PoemsApp_Data_Client.Poem, item2: Array<string>} | null, headersHandler?: () => HttpHeaders): Observable<Fonlow_PoemsApp_Data_Client.Poem> {
			return this.http.put<Fonlow_PoemsApp_Data_Client.Poem>(this.baseUri + 'api/Poems/AddWithExistingAnnotations', JSON.stringify(poemAndAnnotations), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Poem with Tags
		 * POST api/Poems/addWithExistingTags
		 */
		addWithExistingTags(poemAndTags?: {item1: Fonlow_PoemsApp_Data_Client.Poem, item2: Array<string>} | null, headersHandler?: () => HttpHeaders): Observable<Fonlow_PoemsApp_Data_Client.Poem> {
			return this.http.post<Fonlow_PoemsApp_Data_Client.Poem>(this.baseUri + 'api/Poems/addWithExistingTags', JSON.stringify(poemAndTags), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * PUT api/Poems/AddWithNewAnnotationNames
		 */
		addWithNewAnnotationNames(poemAndAnnotations?: {item1: Fonlow_PoemsApp_Data_Client.Poem, item2: Array<string>} | null, headersHandler?: () => HttpHeaders): Observable<Fonlow_PoemsApp_Data_Client.Poem> {
			return this.http.put<Fonlow_PoemsApp_Data_Client.Poem>(this.baseUri + 'api/Poems/AddWithNewAnnotationNames', JSON.stringify(poemAndAnnotations), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Add new poem with existing tags, and new tag names.
		 * POST api/Poems/AddWithNewTagNames
		 * @param {{item1: Fonlow_PoemsApp_Data_Client.Poem, item2: Array<string>}} poemAndNewTags new poem, existing Tag Ids, and new tag names
		 * @return {Fonlow_PoemsApp_Data_Client.Poem} Poem Id and new tag objects
		 */
		addWithNewTagNames(poemAndNewTags?: {item1: Fonlow_PoemsApp_Data_Client.Poem, item2: Array<string>} | null, headersHandler?: () => HttpHeaders): Observable<Fonlow_PoemsApp_Data_Client.Poem> {
			return this.http.post<Fonlow_PoemsApp_Data_Client.Poem>(this.baseUri + 'api/Poems/AddWithNewTagNames', JSON.stringify(poemAndNewTags), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Associate album with existing poems.
		 * PUT api/Poems/poemsToAlbum?albumId={albumId}
		 */
		associateAlbumWithPoems(albumId?: string | null, poemIds?: Array<string> | null, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/Poems/poemsToAlbum?albumId=' + albumId, JSON.stringify(poemIds), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Associate with existing albums.
		 * PUT api/Poems/albums?poemId={poemId}
		 */
		associateWithAlbums(poemId?: string | null, albumIds?: Array<string> | null, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/Poems/albums?poemId=' + poemId, JSON.stringify(albumIds), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Associate with existing annotations.
		 * PUT api/Poems/existingAnnotations?poemId={poemId}
		 */
		associateWithExistingAnnotations(poemId?: string | null, existingAnnotationIds?: Array<string> | null, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/Poems/existingAnnotations?poemId=' + poemId, JSON.stringify(existingAnnotationIds), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Associate with existing tags.
		 * PUT api/Poems/existingTags?poemId={poemId}
		 */
		associateWithExistingTags(poemId?: string | null, existingTagIds?: Array<string> | null, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/Poems/existingTags?poemId=' + poemId, JSON.stringify(existingTagIds), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Save the new annotation, and associate with the poem.
		 * If the annotation exists, return null. Nevertheless, the client should check if the annotation had actually been in the annotation list, to avoid exceptions.
		 * PUT api/Poems/newAnnotationName?poemId={poemId}&newAnnotationName={newAnnotationName}
		 * @return {Fonlow_PoemsApp_Data_Client.AnnotationBrief} New annotation, or null if the annotation exists
		 */
		associateWithNewAnnotationName(poemId?: string | null, newAnnotationName?: string | null, headersHandler?: () => HttpHeaders): Observable<Fonlow_PoemsApp_Data_Client.AnnotationBrief | null> {
			return this.http.put<Fonlow_PoemsApp_Data_Client.AnnotationBrief | null>(this.baseUri + 'api/Poems/newAnnotationName?poemId=' + poemId + '&newAnnotationName=' + (!newAnnotationName ? '' : encodeURIComponent(newAnnotationName)), null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Associate poem with new tag names.
		 * PUT api/Poems/newAnnotationNames?poemId={poemId}
		 * @return {Array<Fonlow_PoemsApp_Data_Client.AnnotationBrief>} New annotation objects based on newAnnotationNames
		 */
		associateWithNewAnnotationNames(poemId?: string | null, newAnnotationNames?: Array<string> | null, headersHandler?: () => HttpHeaders): Observable<Array<Fonlow_PoemsApp_Data_Client.AnnotationBrief>> {
			return this.http.put<Array<Fonlow_PoemsApp_Data_Client.AnnotationBrief>>(this.baseUri + 'api/Poems/newAnnotationNames?poemId=' + poemId, JSON.stringify(newAnnotationNames), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Save the new tag, and associate with the poem.
		 * If the tag exists, return null. Nevertheless, the client should check if the tag had actually been in the tag list, to avoid exceptions.
		 * PUT api/Poems/newTagName?poemId={poemId}&newTagName={newTagName}
		 * @return {Fonlow_PoemsApp_Data_Client.Tag} New tag, or null if the tag exists
		 */
		associateWithNewTagName(poemId?: string | null, newTagName?: string | null, headersHandler?: () => HttpHeaders): Observable<Fonlow_PoemsApp_Data_Client.Tag | null> {
			return this.http.put<Fonlow_PoemsApp_Data_Client.Tag | null>(this.baseUri + 'api/Poems/newTagName?poemId=' + poemId + '&newTagName=' + (!newTagName ? '' : encodeURIComponent(newTagName)), null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Associate poem with new tag names.
		 * PUT api/Poems/newTagNames?poemId={poemId}
		 * @return {Array<Fonlow_PoemsApp_Data_Client.Tag>} New tag objects based on newTagNames
		 */
		associateWithNewTagNames(poemId?: string | null, newTagNames?: Array<string> | null, headersHandler?: () => HttpHeaders): Observable<Array<Fonlow_PoemsApp_Data_Client.Tag>> {
			return this.http.put<Array<Fonlow_PoemsApp_Data_Client.Tag>>(this.baseUri + 'api/Poems/newTagNames?poemId=' + poemId, JSON.stringify(newTagNames), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Reconcile among all images, poemImageMaps, and actually img local
		 * POST api/Poems/AuditAndReconcile
		 */
		auditAndReconcile(headersHandler?: () => HttpHeaders): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/Poems/AuditAndReconcile', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * DELETE api/Poems/all
		 */
		clearAllTables(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/Poems/all', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete poem, along with association with albums. However, associated tags and annotations are still in maps.
		 * DELETE api/Poems?id={id}
		 */
		delete(id?: string | null, headersHandler?: () => HttpHeaders): Observable<boolean> {
			return this.http.delete<boolean>(this.baseUri + 'api/Poems?id=' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Dissociate album.
		 * DELETE api/Poems/DissociateAlbum?poemId={poemId}&albumId={albumId}
		 */
		dissociateAlbum(poemId?: string | null, albumId?: string | null, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/Poems/DissociateAlbum?poemId=' + poemId + '&albumId=' + albumId, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Disassociate annotation.
		 * DELETE api/Poems/DissociateAnnotation?poemId={poemId}&annotationId={annotationId}
		 */
		dissociateAnnotation(poemId?: string | null, annotationId?: string | null, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/Poems/DissociateAnnotation?poemId=' + poemId + '&annotationId=' + annotationId, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * DissociateT tag.
		 * DELETE api/Poems/DissociateTag?poemId={poemId}&tagId={tagId}
		 */
		dissociateTag(poemId?: string | null, tagId?: string | null, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/Poems/DissociateTag?poemId=' + poemId + '&tagId=' + tagId, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Fix the problem of escaped unicode string, because of the DomSanitizer of Angular. Once off solution
		 * PUT api/Poems/EscapeStringToUnicode
		 */
		escapeStringToUnicode(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/Poems/EscapeStringToUnicode', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Include TagMap and AlbumMap. Support ZH Convert.
		 * GET api/Poems?id={id}
		 */
		get(id?: string | null, headersHandler?: () => HttpHeaders): Observable<Fonlow_PoemsApp_Data_Client.Poem | null> {
			return this.http.get<Fonlow_PoemsApp_Data_Client.Poem | null>(this.baseUri + 'api/Poems?id=' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Img Src Url to multiple poem Ids
		 * GET api/Poems/AllNotLocalImagesOfPoems
		 */
		getAllNotLocalImagesOfPoems(headersHandler?: () => HttpHeaders): Observable<{[id: string]: Array<string> }> {
			return this.http.get<{[id: string]: Array<string> }>(this.baseUri + 'api/Poems/AllNotLocalImagesOfPoems', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Scan all poems' HTML to create mapping from imageIds to poems. Dic of imageId to poems with img local.
		 * POST api/Poems/AssociatedPoemsOfImages
		 */
		getAssociatedPoemsOfAllImages(headersHandler?: () => HttpHeaders): Observable<{[id: string]: Array<Fonlow_PoemsApp_Data_Client.PoemBrief> }> {
			return this.http.post<{[id: string]: Array<Fonlow_PoemsApp_Data_Client.PoemBrief> }>(this.baseUri + 'api/Poems/AssociatedPoemsOfImages', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * All, OrderByDescending published. Support ZH Convert. If the user is not loggedin, not returning those not yet published.
		 * GET api/Poems/AllBriefs
		 * @param {number} timezoneOffset int in header
		 */
		getBriefsOfPoems(headersHandler?: () => HttpHeaders): Observable<Array<Fonlow_PoemsApp_Data_Client.PoemBrief>> {
			return this.http.get<Array<Fonlow_PoemsApp_Data_Client.PoemBrief>>(this.baseUri + 'api/Poems/AllBriefs', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * All poems of album, order by published. Support ZH Convert.
		 * GET api/Poems/GetOfAlbum?albumId={albumId}
		 * @param {string} convertZH string in header
		 * @param {number} timezoneOffset int in header
		 */
		getOfAlbum(albumId?: string | null, headersHandler?: () => HttpHeaders): Observable<Array<Fonlow_PoemsApp_Data_Client.Poem>> {
			return this.http.get<Array<Fonlow_PoemsApp_Data_Client.Poem>>(this.baseUri + 'api/Poems/GetOfAlbum?albumId=' + albumId, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/Poems/GetPoemBriefsOfAlbum?albumId={albumId}
		 * @param {number} timezoneOffset int in header
		 */
		getPoemBriefsOfAlbum(albumId?: string | null, headersHandler?: () => HttpHeaders): Observable<Array<Fonlow_PoemsApp_Data_Client.PoemBrief>> {
			return this.http.get<Array<Fonlow_PoemsApp_Data_Client.PoemBrief>>(this.baseUri + 'api/Poems/GetPoemBriefsOfAlbum?albumId=' + albumId, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/Poems/PoemCollection
		 */
		getPoemCollection(headersHandler?: () => HttpHeaders): Observable<Fonlow_PoemsApp_Data_Client.PoemCollection> {
			return this.http.get<Fonlow_PoemsApp_Data_Client.PoemCollection>(this.baseUri + 'api/Poems/PoemCollection', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/Poems/PoemCollectionInOtherChineseWriting
		 */
		getPoemCollectionInOtherChineseWriting(headersHandler?: () => HttpHeaders): Observable<Fonlow_PoemsApp_Data_Client.PoemCollection | null> {
			return this.http.get<Fonlow_PoemsApp_Data_Client.PoemCollection | null>(this.baseUri + 'api/Poems/PoemCollectionInOtherChineseWriting', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/Poems/PoemCollectionPublished
		 * @param {number} timezoneOffset In request headers
		 */
		getPoemCollectionPublished(headersHandler?: () => HttpHeaders): Observable<Fonlow_PoemsApp_Data_Client.PoemCollection> {
			return this.http.get<Fonlow_PoemsApp_Data_Client.PoemCollection>(this.baseUri + 'api/Poems/PoemCollectionPublished', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/Poems/PoemCollectionPublishedInOtherChineseWriting
		 * @param {number} timezoneOffset timezoneOffset in headers
		 */
		getPoemCollectionPublishedInOtherChineseWriting(headersHandler?: () => HttpHeaders): Observable<Fonlow_PoemsApp_Data_Client.PoemCollection | null> {
			return this.http.get<Fonlow_PoemsApp_Data_Client.PoemCollection | null>(this.baseUri + 'api/Poems/PoemCollectionPublishedInOtherChineseWriting', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/Poems/PoemsWithInternalImageId?imageId={imageId}
		 */
		getPoemsWithInternalImageId(imageId?: string | null, headersHandler?: () => HttpHeaders): Observable<Array<Fonlow_PoemsApp_Data_Client.PoemBrief>> {
			return this.http.get<Array<Fonlow_PoemsApp_Data_Client.PoemBrief>>(this.baseUri + 'api/Poems/PoemsWithInternalImageId?imageId=' + imageId, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/Poems/TotalCountOfStanza
		 */
		getTotalCountOfStanza(headersHandler?: () => HttpHeaders): Observable<number> {
			return this.http.get<number>(this.baseUri + 'api/Poems/TotalCountOfStanza', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * POST api/Poems/PoemCollection
		 */
		importPoemCollection(collection?: Fonlow_PoemsApp_Data_Client.PoemCollection | null, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/Poems/PoemCollection', JSON.stringify(collection), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * GET api/Poems/ByAnnotation?annotationId={annotationId}
		 */
		searchByAnnotation(annotationId?: string | null, headersHandler?: () => HttpHeaders): Observable<Array<Fonlow_PoemsApp_Data_Client.PoemBrief>> {
			return this.http.get<Array<Fonlow_PoemsApp_Data_Client.PoemBrief>>(this.baseUri + 'api/Poems/ByAnnotation?annotationId=' + annotationId, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Search by keywords, separated by comma and Chinese comma. Support ZH Convert.
		 * POST api/Poems/ByKeywords
		 * @param {number} timezoneOffset int in header
		 */
		searchByKeywords(keywords?: string | null, headersHandler?: () => HttpHeaders): Observable<Array<Fonlow_PoemsApp_Data_Client.PoemBrief>> {
			return this.http.post<Array<Fonlow_PoemsApp_Data_Client.PoemBrief>>(this.baseUri + 'api/Poems/ByKeywords', JSON.stringify(keywords), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Update poem.
		 * PUT api/Poems
		 */
		update(poem?: Fonlow_PoemsApp_Data_Client.Poem | null, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/Poems', JSON.stringify(poem), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Just for maintenance, while the plaintext should be produced in the frontend.
		 * POST api/Poems/UpdatePlainTextOfHtmlPoems
		 */
		updatePlainTextOfHtmlPoems(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/Poems/UpdatePlainTextOfHtmlPoems', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * PUT api/Poems/UpdatePublished?poemId={poemId}
		 */
		updatePublished(poemId?: string | null, dt?: Date | null, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/Poems/UpdatePublished?poemId=' + poemId, JSON.stringify(dt), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}
	}

	@Injectable()
	export class Tags {
		constructor(@Inject('baseUri') private baseUri: string = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * POST api/Tags
		 */
		add(tag?: Fonlow_PoemsApp_Data_Client.Tag | null, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.post<string>(this.baseUri + 'api/Tags', JSON.stringify(tag), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete along with what in poemTagMap.
		 * DELETE api/Tags?id={id}
		 */
		delete(id?: string | null, headersHandler?: () => HttpHeaders): Observable<boolean> {
			return this.http.delete<boolean>(this.baseUri + 'api/Tags?id=' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * POST api/Tags/Orphaned
		 */
		deleteOrphaned(ids?: Array<string> | null, headersHandler?: () => HttpHeaders): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/Tags/Orphaned', JSON.stringify(ids), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get tag. Support ZH Convert.
		 * GET api/Tags?id={id}
		 */
		get(id?: string | null, headersHandler?: () => HttpHeaders): Observable<Fonlow_PoemsApp_Data_Client.Tag | null> {
			return this.http.get<Fonlow_PoemsApp_Data_Client.Tag | null>(this.baseUri + 'api/Tags?id=' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get all tags. Support ZH Convert.
		 * GET api/Tags/all
		 */
		getAll(headersHandler?: () => HttpHeaders): Observable<Array<Fonlow_PoemsApp_Data_Client.Tag>> {
			return this.http.get<Array<Fonlow_PoemsApp_Data_Client.Tag>>(this.baseUri + 'api/Tags/all', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get all tags as dictionary. Support ZH Convert.
		 * GET api/Tags/allDic
		 */
		getAllDic(headersHandler?: () => HttpHeaders): Observable<{[id: string]: Fonlow_PoemsApp_Data_Client.Tag }> {
			return this.http.get<{[id: string]: Fonlow_PoemsApp_Data_Client.Tag }>(this.baseUri + 'api/Tags/allDic', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/Tags/Orphaned
		 */
		getOrphaned(headersHandler?: () => HttpHeaders): Observable<Array<Fonlow_PoemsApp_Data_Client.Tag>> {
			return this.http.get<Array<Fonlow_PoemsApp_Data_Client.Tag>>(this.baseUri + 'api/Tags/Orphaned', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/Tags/PoemCountOfTags
		 */
		getPoemCountOfTags(headersHandler?: () => HttpHeaders): Observable<Array<Fonlow_PoemsApp_Data_Client.TagPoemCount>> {
			return this.http.get<Array<Fonlow_PoemsApp_Data_Client.TagPoemCount>>(this.baseUri + 'api/Tags/PoemCountOfTags', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * PUT api/Tags
		 */
		update(tag?: Fonlow_PoemsApp_Data_Client.Tag | null, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/Tags', JSON.stringify(tag), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}
	}

	@Injectable()
	export class Translate {
		constructor(@Inject('baseUri') private baseUri: string = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * POST api/Translate/s25
		 */
		hans2Tant(text?: string | null, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.post(this.baseUri + 'api/Translate/s25', JSON.stringify(text), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }),  responseType: 'text' });
		}

		/**
		 * POST api/Translate/t2s
		 */
		hant2Tans(text?: string | null, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.post(this.baseUri + 'api/Translate/t2s', JSON.stringify(text), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }),  responseType: 'text' });
		}
	}

}

