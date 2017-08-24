<?php get_header(); ?>
	<section id="content" role="main">
		<div class="container">
			<div class="left-area">
				<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
				<article>
					<div class="featured-image">
						<?php if ( has_post_thumbnail() ) { ?>
						<?php the_post_thumbnail( 'blog-featured-image' ); ?>
						<?php } ?>
					</div>
					<h1 class="entry-title"><?php the_title(); ?></h1>
					<div class="entry-meta">
						<span class="date"><?php the_time('F d, Y'); ?></span>
						<span class="author"><?php the_author(); ?></span>
						<span class="comments"><?php comments_popup_link('No comments', '1 comment', '% comments'); ?></span>
						<span class="category"><?php echo get_the_category_list(", "); ?></span>	
					</div>
					<div class="content">
						<?php the_content(); ?>
					</div>
				</article>
				<?php if ( ! post_password_required() ) comments_template( '', true ); ?>
				<?php endwhile; endif; ?>
			</div> <!-- END LEFT AREA -->
			<div class="right-area">
				<div class="sidebar">
					<div class="categories">
							<ul>
						    <?php wp_list_categories( array(
						        'orderby' => 'name'
						    ) ); ?> 
						</ul>
					</div>
					<div class="popular-posts">
						<div class="post-list">
							<?php query_posts( 'post_type=post&posts_per_page=3&meta_key=popular_post&meta_value=yes' ); ?>
							<?php if ( have_posts() ) : ?>
							
								<h2 class="sidebar-headline">
									POPULAR POSTS
								</h2>
								<?php while ( have_posts() ) : the_post(); ?> 
							<div class="one-post">
								<div class="image"><a href="<?php the_permalink(); ?>"><?php the_post_thumbnail( 'thumbnail' ); ?></a></div>
								<div class="text">
									<div class="date"><?php the_time('d F'); ?></div>
									<h2 class="title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
								</div>
								<div class="clear"></div>
							</div>
							<?php endwhile;  endif;  wp_reset_query(); ?>
						</div>

					</div>
				</div>
			</div> <!-- END RIGHT AREA -->
		<div class="clear"></div>
		</div>
	</section>
<?php get_footer(); ?>