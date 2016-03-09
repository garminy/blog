class PostsController < ApplicationController
  before_action :basic_authenticate, only: [:edit, :update, :create, :new, :destroy]
  before_action :set_post, only: [:show, :edit, :update, :destroy]
  before_action :prepare_data, only: [:index, :show, :tags]
  layout 'layouts/posts'

  # GET /posts
  # GET /posts.json
  def index 
    @posts = @preview_posts
    @default_post = @posts.first
  end

  # GET /posts/1
  # GET /posts/1.json
  def show
    @default_post = @post
  end

  # GET /posts/new
  def new
    @post = Post.new
    render layout: 'layouts/application'
  end

  # GET /posts/1/edit
  def edit
    render layout: 'layouts/application'
  end

  # POST /posts
  # POST /posts.json
  def create
    post_params[:tag_list] = post_params[:tag_list].split(',')
    @post = Post.new(post_params)

    respond_to do |format|
      if @post.save
        format.html { redirect_to @post, notice: 'Post was successfully created.' }
        format.json { render :show, status: :created, location: @post }
      else
        format.html { render :new }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /posts/1
  # PATCH/PUT /posts/1.json
  def update
    post_params[:tag_list] = post_params[:tag_list].split(',')

    respond_to do |format|
      if @post.update(post_params)
        format.html { redirect_to @post, notice: 'Post was successfully updated.' }
        format.json { render :show, status: :ok, location: @post }
      else
        format.html { render :edit }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /posts/1
  # DELETE /posts/1.json
  def destroy
    @post.destroy
    respond_to do |format|
      format.html { redirect_to posts_url, notice: 'Post was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def tags
    @tag = Tag.find_by_name(params[:name])
    @posts = Post.tagged_with(@tag.name).paginate(page: params[:page])
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def post_params
      params.require(:post).permit(:title, :user_id, :content, :tag_list)
    end

    def basic_authenticate
      authenticate_or_request_with_http_basic do |username, password|
        username == "wrymax" && password == "wrymax57148778"
      end
    end

    # posts and tags
    def prepare_data
      @tags = Tag.hot_tags.paginate(page: params[:page])
      @preview_posts = Post.paginate(page: params[:page])
    end
end
